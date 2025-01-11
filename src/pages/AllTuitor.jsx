import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";

const AllTuitor = () => {
  const allData = useLoaderData();

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allData.map((tutor) => (
            <div key={tutor.id} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{tutor.name}</h2>
                <p className="text-gray-600">Language: {tutor.language}</p>
                <p className="text-gray-600">Price: ${tutor.price}</p>
                <p className="text-gray-600">Reviews: {tutor.review}</p>
                <Link to={`/details/${tutor._id}`}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTuitor;
