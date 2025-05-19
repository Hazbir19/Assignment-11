import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";

const AllTuitor = () => {
  const { user } = useContext(ContextMain);
  const allData = useLoaderData();

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-3 my-8 ">
          {allData.map((tutor) => (
            <div
              key={tutor.id}
              className="p-2 bg-background rounded-lg shadow-md w-11/12 mx-auto"
            >
              <img
                src={tutor?.imageUrl}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{tutor.name}</h2>
                <p className="text-gray-600">Language: {tutor.language}</p>
                <p className="text-gray-600">Price: ${tutor.price}</p>
                <p className="text-gray-600">Reviews: {tutor.review}</p>
                <Link to={`/details/${tutor._id}`}>
                  <button
                    className={`${
                      user?.role === "teacher" ? "hidden" : "block"
                    } mt-4 bg-accent text-text font-medium font-body px-4 py-2 rounded-lg`}
                  >
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
