import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const LayoutAdmin:React.FC<{}> = () => {
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-gray-50">
                <div className="flex ">
                    <Sidebar />
                </div>
                <div className="flex-col flex-auto overflow-x-hidden overflow-y-auto relative">
                    <Header />
                    <main className='py-6 px-4'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};
export default LayoutAdmin;