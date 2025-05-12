import React, { useContext, useEffect, useState } from "react";
import { ContextMain } from "../Context/ContextApi";
import toast from "react-hot-toast";

const MyBooked = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
console.log(bookedTutors);
const { user } = useContext(ContextMain);

// Fetch all booked tutors
useEffect(() => {
  const fetchBookedTutors = async () => {
    try {
      const response = await fetch(
        `https://assignment-11-server-six-liard.vercel.app/mybooked-tuitor?email=${user.email}`
      );
      if (response.ok) {
        const data = await response.json();
        setBookedTutors(data);
      } else {
        console.error("Failed to fetch booked tutors.");
      }
    } catch (error) {
      console.error("Error fetching booked tutors:", error);
    }
  };

  fetchBookedTutors();
}, []);
const handleReview = async (tutorId) => {
  try {
    const response = await fetch(
      `https://assignment-11-server-six-liard.vercel.app/mybooked-tuitor/${tutorId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      toast.success("Review added successfully!");
      setBookedTutors((prevTutors) =>
        prevTutors.map((tutor) => {
          // Convert reviews to a number before incrementing
          const currentReviews = Number(tutor.reviews) || 0;
          return tutor._id === tutorId
            ? { ...tutor, reviews: currentReviews + 1 }
            : tutor;
        })
      );
    } else {
      console.error("Failed to update review.");
    }
  } catch (error) {
    console.error("Error updating review:", error);
  }
};

return (
  <>
    <div>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-5xl md:text-2xl sm:text-lg bg-white p-5 mt-5">
          My Booked Tutors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedTutors.map((tutor) => (
            <div key={tutor._id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={tutor?.imageUrl}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{tutor.name}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Language:</strong> {tutor.language}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Price:</strong> ${tutor.price}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Reviews:</strong>
                {parseInt(tutor.reviews) || 0}
              </p>
              <button
                onClick={() => handleReview(tutor._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Add Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
};

export default MyBooked;
