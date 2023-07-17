import React, { ReactNode } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type commonTable = {
	headers: (ReactNode|string)[],
	bodyRecords: (ReactNode|string)[][]
}

export const useGetCommonTable = () => {
	return useQuery({
		queryKey: ['commontable'], 
		queryFn: async <commonTable>() => {
			const result = await axios.get('/api/test/commontable', {});
			return result.data;
		},
	});
}