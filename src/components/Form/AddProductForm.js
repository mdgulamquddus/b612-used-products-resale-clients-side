import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AddProductForm = ({
  handleSubmit,
  purchageDate,
  setPurChageDate,
  addDate,
  setAddDate,
  loading,
}) => {
  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
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
              <label htmlFor="model" className="block text-gray-600">
                Model
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                name="model"
                id="model"
                type="text"
                placeholder="Model"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="model" className="block text-gray-600">
                Select Category
              </label>
              <select
                name="category"
                className="select select-bordered border-yellow-300 focus:outline-yellow-500 w-full "
              >
                <option>LED</option>
                <option>4K UHD</option>
                <option>SMART TV</option>
                <option>BLACK & WHITE</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="model" className="block text-gray-600">
                Select Condition
              </label>
              <select
                name="condition"
                className="select select-bordered border-yellow-300 focus:outline-yellow-500 w-full "
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="flex justify-between ">
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">Purchage Date</p>
                  <DatePicker
                    selected={purchageDate}
                    onChange={(data) => setPurChageDate(data)}
                    className="w-2/3"
                  />
                </div>
              </div>
              <div className="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                <div>
                  <p className="block text-sm text-gray-500">
                    Adding Product Date
                  </p>
                  <DatePicker
                    selected={addDate}
                    onChange={(data) => setAddDate(data)}
                    className="w-2/3"
                    readOnly
                  />
                </div>
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
                  Mobile Number
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-green-50"
                  name="mobileNumber"
                  id="mobileNumber"
                  type="number"
                  placeholder="Mobile Number"
                  required
                />
              </div>
            </div>

            {/* <div className="flex justify-between gap-2">
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
              </div> */}

            {/* <div className="space-y-1 text-sm">
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
              </div> */}
            {/* </div> */}

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
