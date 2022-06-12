import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const menu = <>
        <li className='mx-6'>Home</li>
        <li className='mx-6'>Home</li>
        <li className='mx-6'>Home</li>
        <li className='mx-6'>Home</li>
    </>
    const [navTextColor, setnavTextColor] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#8F71FF") : setnavColor("transparent");
        window.scrollY > 10 ? setnavTextColor("white") : setnavTextColor("black");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div style={{
            backgroundColor: navColor,
            color: navTextColor,
            transition: "all 0.5s"
        }}
            className="navbar bg-transparent fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Habib</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;