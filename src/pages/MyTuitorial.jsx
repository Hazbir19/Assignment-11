import React, { useContext, useEffect, useState } from "react";
import { ContextMain } from "../Context/ContextApi";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import CustomBanner from "./../Components/CustomBanner";

const MyTuitorial = () => {
  const { user } = useContext(ContextMain);
  const email = user.email;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchEquipments = async () => {
      axios
        .get(
          `https://assignment-11-server-six-liard.vercel.app/mytuitorial?email=${user?.email}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => setData(res.data));
    };

    fetchEquipments();
  }, [email]);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://assignment-11-server-six-liard.vercel.app/mytuitorials/${id}`,
        {
          method: "DELETE",
        }
      );
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
        <CustomBanner title="Your Courses">{data.length}</CustomBanner>
        <div>
          <div>
            {data?.length > 0 ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-10/12 lg:w-full md:w-11/12 mx-auto gap-12 items-center mt-5">
                {data.map((item) => (
                  <>
                    <div
                      key={item.id}
                      className="p-2 bg-background rounded-lg shadow-md"
                    >
                      <img
                        src={item?.imageUrl}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">
                          Language: {item.language}
                        </p>
                        <p className="text-gray-600">Price: ${item.price}</p>
                        <p className="text-gray-600">Reviews: {item.review}</p>
                      </div>
                      <div className="card-actions justify-end">
                        <Link to={`/update/${item._id}`}>
                          <button className="btn bg-accent font-body font-semibold text-text">
                            Update
                          </button>
                        </Link>

                        <button
                          className="btn bg-accent font-body font-semibold text-text"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <p>No Tuitor found for this email.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTuitorial;
