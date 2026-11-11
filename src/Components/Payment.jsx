import React from "react";

function Payment() {
  return (
    <div className="lg:w-1/3">
      <div className="border rounded-lg p-4">
        <h4>Choose payment method</h4>
        <div className="space-x-4">
          <label htmlFor="" className="flex items-center space-x-2">
            <input type="radio" className="text-pink-600" />
            <span className=" font-semibold">Card payment</span>
          </label>
          <label htmlFor="" className="flex items-center space-x-2">
            <input name="payment" type="radio" className="text-pink-600" />
            <span className="font-semibold">Cash on Delivery</span>
          </label>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">
              SubTotal
            </span>
            <span className="text-lg text-gray-600 font-semibold">$358484</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-600 font-semibold">Total</span>
            <span className="text-lg text-pink-600 font-semibold">$358484</span>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full px-5 py-2 text-white rounded-lg bg-pink-600 hover:bg-800 transition-colors duration-200 cursor-pointer">
            Proceed to Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
