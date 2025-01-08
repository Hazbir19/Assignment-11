import React, { useContext, useEffect, useState } from "react";
import { ContextMain } from "../Context/ContextApi";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyTuitorial = () => {
  const { user } = useContext(ContextMain);
  const email = user.email;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchEquipments = async () => {
      // const response = await fetch(
      //   `https://sports-equipment-store-backend.vercel.app/items/${email}`
      // );
      axios
        .get(`http://localhost:5000/mytuitorial?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => setData(res.data));
    };

    fetchEquipments();
  }, [email]);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/mytuitorials/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          if (response.ok) {
            toast.success("the item deleted"); // Notify the user
            // Remove the deleted item from the state

            setData((prevData) => prevData.filter((item) => item._id !== id));
          } else {
            toast.error(result.message || "Failed to delete equipment");
          }
        }
      });
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-center lg:text-5xl md:text-2xl sm:text-lg bg-white p-5 mt-5">
          My Tutorial {data.length}
        </h1>
        <div>
          <div>
            {data.length > 0 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 items-center mt-5">
                {data.map((item) => (
                  <>
                    <div className="w-full mx-auto">
                      <div className="card card-compact bg-base-100 w-96 mx-auto shadow-xl">
                        <figure>
                          <img
                            src={item.PhotoUrl}
                            alt="Shoes"
                            className="w-[15rem] p-3 rounded-lg mx-auto"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            Language: {item.language}
                          </h2>
                          <p> Description: {item.description}</p>
                          <p> Review: {item.review}</p>
                          <div className="card-actions justify-end">
                            <Link to={`/update/${item._id}`}>
                              <button className="btn btn-primary">
                                Update
                              </button>
                            </Link>

                            <button
                              className="btn btn-primary"
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <p>No equipment found for this email.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTuitorial;
