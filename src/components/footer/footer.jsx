import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-300">
        <div className="footer container mx-auto mt-10 mb-4 footer-center text-base-content p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Sakhawat Hossen
        </p>
        </div>
    </footer>
  );
};

export default Footer;
