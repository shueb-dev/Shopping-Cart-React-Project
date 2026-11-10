import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-8 mt-16 border-t border-gray-200">
      <div className="max-w-4xl m-auto text-center">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Thank you For Visiting US
        </p>
        <h2 className="text-xl font-semibold text-black-500">
          &copy;All Rights reserved to suuqify {currentYear}
        </h2>
      </div>
    </div>
  );
}

export default Footer;
