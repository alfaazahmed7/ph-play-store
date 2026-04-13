'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href}
            className={`${pathname === href ? "text-[#9F62F2] border-b-2 border-[#9F62F2]" : ""} font-semibold`}
        >
            {children}
        </Link>
    );
};

export default MyLink;