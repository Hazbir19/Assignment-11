import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";

const TuitorDetails = () => {
  const { user } = useContext(ContextMain);
  const idData = useLoaderData();
  const {
    _id,
    name,
    email,
    language,
    price,
    PhotoUrl,
    description,
    review,
    imageUrl,
  } = idData;
  const HandleBooked = () => {
    const info = {
      tutorId: _id,
      Useremail: user.email,
      name,
      email,
      PhotoUrl,
      language,
      price,
      description,
      review,
      imageUrl,
    };
    fetch("https://assignment-11-server-six-liard.vercel.app/mybooked-tuitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Tuitor is save  in DataBase");
        }
      });
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-6">
          <div className="bg-background shadow-sm rounded-lg p-6">
            <div className="flex flex-col md:flex-row">
              <img
                src={imageUrl}
                alt={name}
                className="w-full md:w-1/3 rounded-md shadow-lg mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <p className="text-gray-600 mb-2">
                  <strong>Language:</strong> {language}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Description:</strong> {description}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Price:</strong> ${price}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Reviews:</strong> {review}
                </p>
                <button
                  onClick={HandleBooked}
                  className="bg-accent font-title font-semibold text-text px-4 py-2 rounded-md"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TuitorDetails;
