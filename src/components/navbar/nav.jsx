import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/" className='text-2xl font-bold'>Logo</Link>
            <ul className='flex items-center gap-8 text-lg font-semibold'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;