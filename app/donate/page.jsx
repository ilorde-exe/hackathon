"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div class="font-[sans-serif] text-[#333]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <h2 class="text-center text-3xl font-extrabold">
              Enter all the neccessary details
            </h2>
            <form class="mt-10 space-y-4">
              <div>
                <input
                  name="text"
                  type="text"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </div>
              <div class="!mt-10">
                <button
                  type="submit"
                  class="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
