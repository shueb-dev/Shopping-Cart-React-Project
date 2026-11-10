import React from "react";

function Productskeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(20)
        .fill()
        .map((_, index) => (
          <div className="rounded-lg overflow-hidden p-4 ">
            {/* {'image placeholder'} */}
            <div className="w-full h-48 mt-2 bg-linear-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            {/* {title placeholder} */}
            <div className="w-3/4 h-6 mt-2 bg-linear-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            {/* {description placeholder} */}
            <div className="w-1/2 h-5 mt-2 bg-linear-to-r from-gray-200 to-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
}

export default Productskeleton;
