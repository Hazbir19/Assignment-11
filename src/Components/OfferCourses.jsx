import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";
import CustomBanner from "./CustomBanner";

const OfferCourses = () => {
    const [courses, setCourses] = useState([]);
      const { user } = useContext(ContextMain);
    
   useEffect(() => {
    axios
      .get("https://assignment-11-server-six-liard.vercel.app/tuitorials")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching tutorials:", err);
      });
  }, []);
    
    return (
        <>
        <div>
            <CustomBanner title={"Our Offer Courses "}></CustomBanner>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-3">
          {courses.map((tutor) => (
            <div key={tutor.id} className="p-2 bg-white rounded-lg shadow-md">
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
                    } mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg`}
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
    )
}

export default OfferCourses