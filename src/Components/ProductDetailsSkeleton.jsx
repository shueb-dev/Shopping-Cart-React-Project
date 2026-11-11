import React from "react";

function ProductDetailsSkeleton() {
  return (
    <div>
      <div className="p-4 md:p-6 animate-pulse">
        <div className="w-1/2 h-8 bg-linear-to-r mb-6 from-gray-200 to-gray-300 "></div>
        <div className="md:flex">
          <div className="w-1/2 pr-4 mb-6 md:mb-0">
            {/* {image placeholder} */}
            <div className="w-full h-96 bg-linear-to-r from-gray-200 to-gray-300 rounded-lg"></div>
            {/* {gallery image placeholder} */}
            <div className="flex mt-4 space-x-2 overflow-auto">
              <div className="w-24 h-24 bg-linear-to-r from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="w-24 h-24 bg-linear-to-r from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="w-24 h-24 bg-linear-to-r from-gray-200 to-gray-300 rounded-lg"></div>
              <div className="w-24 h-24 bg-linear-to-r from-gray-200 to-gray-300 rounded-lg"></div>
            </div>
          </div>
          <div className="w-1/2 pl-4 space-y-4">
            {/* {description placeholder} */}
            <div className="h-8 bg-linear-to-r from-gray-200 to-gray-300"></div>
            <div className="h-8 bg-linear-to-r from-gray-200 to-gray-300"></div>
            <div className="h-8 bg-linear-to-r from-gray-200 to-gray-300"></div>
            {/* {product price and stock } */}
            <div className="flex justify-between items-center">
              <div className="w-1/4 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
              <div className="w-1/4 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
            </div>
            {/* {starts } */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
              <div className="w-6 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
              <div className="w-6 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
              <div className="w-6 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
              <div className="w-6 h-6 bg-linear-to-r from-gray-200 to-gray-300"></div>
            </div>
            {/* {add cart button} */}
            <div className="w-1/4 h-6 mt-4 bg-linear-to-r from-gray-200 to-gray-300 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
