import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import { ContextMain } from "../Context/ContextApi";

const Update = () => {
  const Updateduser = useLoaderData();
  console.log(Updateduser);
  const { user } = useContext(ContextMain);
  const handleupdate = (e) => {
    e.preventDefault();
    const PhotoUrl = e.target.PhotoUrl.value;
    const language = e.target.language.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const tuitorialInfo = {
      PhotoUrl,
      language,
      price,
      description,
    };
    fetch(`https://sever-silde.vercel.app/mytuitorials/${Updateduser._id}`, {
      /** sent data in backend */
      method: "PUT", //Update Keyword
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tuitorialInfo), //sent data client from backend
    })
      //from respons
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("User Updated Successfully");
        }
      });
  };
  return (
    <>
      <div>
        <div>
          <h1>Updated Tuitorial</h1>
          <form className="mx-5" onSubmit={handleupdate}>
            <div className="max-w-screen-sm mx-auto bg-gradient-to-tr from-purple-500/50 to-[#ff9999] rounded-lg py-[3rem] px-[2rem] mt-[5rem]">
              <div className="lg:flex md:flex justify-evenly gap-5 w-full">
                <div className="form-control my-[1rem]">
                  <input
                    type="text"
                    placeholder={user?.name}
                    className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg  lg:w-[16rem] md:w-[16rem]"
                    disabled
                    name="username"
                  />
                </div>
                <div className="form-control my-[1rem]">
                  <input
                    type="email"
                    placeholder={user?.email}
                    className="input input-bordered focus:bg-gray-200/50 focus:text-black focus:font-semibold  focus:text-lg lg:w-[18rem] md:w-[18rem] "
                    disabled
                    name="email"
                  />
                </div>
              </div>
              <div className="form-control my-[1rem]">
                <input
                  type="text"
                  placeholder="tutorial image"
                  defaultValue={Updateduser.PhotoUrl}
                  className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg"
                  name="PhotoUrl"
                />
              </div>
              <div className="lg:flex md:flex justify-center gap-5 w-full">
                <div className="form-control my-[1rem] w-full">
                  <input
                    type="text"
                    placeholder="language"
                    defaultValue={Updateduser.language}
                    className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg w-full "
                    required
                    name="language"
                  />
                </div>
                <div className="form-control my-[1rem] w-full">
                  <input
                    type="text"
                    placeholder="Price"
                    defaultValue={Updateduser.price}
                    className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg w-full "
                    required
                    name="price"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-5 w-full">
                <textarea
                  class="textarea textarea-bordered w-full focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg my-[1rem] textarea-lg"
                  placeholder="Description"
                  defaultValue={Updateduser.description}
                  name="description"
                ></textarea>
              </div>
              <div className="form-control my-[1rem] w-full">
                <input
                  type="text"
                  placeholder={Updateduser.review}
                  className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg"
                  required
                  name="review"
                  disabled
                />
              </div>
              <div className="flex justify-center mt-[2rem] gap-12">
                <button
                  className="bg-purple-600/50 px-5 py-2 rounded-xl text-lg text-white font-bold hover:bg-purple-500/50"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
