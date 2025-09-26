import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <p className="md:text-sm text-xs text-gray-500 pb-1.5 border-b">
        Copyright &copy; {new Date().getFullYear()} — All rights reserved
      </p>
      <p className="md:text-sm text-xs text-gray-500 pt-1.5">Sumit Shrirange</p>
    </div>
  );
}

export default Footer;
