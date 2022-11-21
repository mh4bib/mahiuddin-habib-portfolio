import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#8F71FF] text-white rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Porjects</a>
                <a className="link link-hover">About Me</a>
                <a className="link link-hover">Contact Me</a>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Mahiuddin Habib</p>
            </div>
        </footer>
    );
};

export default Footer;