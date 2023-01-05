import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AddProductForm = ({
  handleSubmit,
  buyDate,
  setBuyDate,
  addDate,
  setAddDate,
  loading,
}) => {
  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            // onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className="flex justify-between ">
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">From</p>
                  <DatePicker
                    selected={buyDate}
                    onChange={(data) => setBuyDate(data)}
                    className="w-2/3"
                  />
                </div>

                {/* <CalendarIcon className="h5 w-5" /> */}
              </div>
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">To</p>
                  <DatePicker
                    selected={addDate}
                    onChange={(data) => setAddDate(data)}
                    className="w-2/3"
                  />
                </div>

                {/* <CalendarIcon className="h5 w-5" /> */}
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <label
                htmlFor="image"
                className="p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-yellow-500 "
              >
                <input type="file" name="image" id="image" accept="image/*" />
              </label>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-yellow-300 focus:outline-yellow-500 "
                name="description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-500 hover:bg-yellow-600 hover:text-white focus:shadow-outline focus:outline-none"
            >
              Save & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;