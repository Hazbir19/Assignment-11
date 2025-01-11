import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const FindTutors = () => {
  const { language } = useParams();
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutors = async () => {
      // const response = await fetch(`https://sever-silde.vercel.app/tutors/${language}`);
      // const data = await response.json();
      axios
        .get(`https://sever-silde.vercel.app/tutors/${language}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTutors(res.data);
        });
    };
    fetchTutors();
  }, [language]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center lg:text-5xl md:text-2xl sm:text-lg bg-white p-5 mt-5 mx-[2rem]">
        Find Your Language Tuitor
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {tutors.map((tutor) => (
          <>
            <div key={tutor.id} className="p-4 bg-white rounded-lg shadow-md ">
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
          </>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
