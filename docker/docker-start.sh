#!/bin/bash

while getopts bp: OPT
do
	case $OPT in
		 b) IS_SET_OPT_B="TRUE";;
		 p) IS_SET_OPT_P="TRUE"; DEFAULT_LOCAL_PORT=$OPTARG ;;
		 *) echo "$OPTは定義されていません";;
	esac
done

isUpdate=true;
originVerFilePath="./.docker-version";
localVerFilePath="./.local-docker-version";

if [ "$IS_SET_OPT_B" != "TRUE" ]; then # -b 引数が指定されたときはbuild
	if [ -e "$localVerFilePath" ]; then
		originVer=`cat ${originVerFilePath}`
		localVer=`cat ${localVerFilePath}`

		if [ "$localVer" = "$originVer" ]; then
			isUpdate=false;
		fi
	fi
fi

docker-compose down

if [ $isUpdate = 'true' ]; then
	docker-compose build --no-cache

	# buildしたらオリジンバージョンファイルをコピー
	cp -f $originVerFilePath $localVerFilePath;
fi

if [ "$IS_SET_OPT_P" == "TRUE" ]; then # ポートの指定がある場合はexport
	export DEFAULT_LOCAL_PORT="$DEFAULT_LOCAL_PORT"
fi

# コンテナ起動
docker-compose up -d

if [ "$IS_SET_OPT_P" == "TRUE" ]; then # ポートの指定がある場合はexport
	export -n DEFAULT_LOCAL_PORT
fi

