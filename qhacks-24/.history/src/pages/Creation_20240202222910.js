// Import React and necessary hooks
import React from 'react';
import CreationNavbar from '../components/CreationNavbar';

// The main component for the form
export default function Creation() {
  return (
    <>
    <CreationNavbar />
    <div className="container mt-[20px] mx-auto px-4">
      <form>
        <div className="mb-4">
          <label className="font-jose block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="font-jose shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter your title here"
          />
        </div>

        <div className="mb-4">
          <label className="font-jose block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="font-jose shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter your title here"
          />
        </div>

        <div className="mb-4">
          <span className="font-jose text-gray-700 text-sm font-bold mb-2">Condition</span>
          <div className="mt-2">
            <label className="font-jose inline-flex items-center">
              <input type="radio" className="form-radio" name="condition" value="Brand New" />
              <span className="font-jose ml-2">Brand New</span>
            </label>
            <label className="font-jose inline-flex items-center ml-6">
              <input type="radio" className="form-radio" name="condition" value="Like New" />
              <span className="font-jose ml-2">Like New</span>
            </label>
            <label className="font-jose inline-flex items-center ml-6">
              <input type="radio" className="form-radio" name="condition" value="Lightly Used" />
              <span className="font-jose ml-2">Lightly Used</span>
            </label>
            <label className="font-jose inline-flex items-center ml-6">
              <input type="radio" className="form-radio" name="condition" value="Used" />
              <span className="font-jose ml-2">Used</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-jose block text-gray-700 text-sm font-bold mb-2" htmlFor="postal-code">
            Postal Code
          </label>
          <input
            className="font-jose shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postal-code"
            type="text"
            placeholder="X0X 0X0"
          />
        </div>

        <div className="mb-4">
          <label className="font-jose block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="font-jose shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="$Price"
          />
        </div>

        <div className="mb-4">
          <label className="font-jose block text-gray-700 text-sm font-bold mb-2">
            Images
          </label>
          <button
            type="button"
            className="font-jose bg-gray-200 w-full py-2 px-3 text-gray-700 rounded border border-gray-300"
          >
            + Upload An Image
          </button>
        </div>

        <div className="font-jose flex justify-between items-center">
          <button
            type="button"
            className="font-jose bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-jose bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
    </>
  );
};