import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Guest({ children }) {
    return (
        <div className="h-full flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
