import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import toast from "react-hot-toast";

const AddTuitorial = () => {
  const { user } = useContext(ContextMain);
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.name;
    const email = user.email;
    const PhotoUrl = e.target.PhotoUrl.value;
    const language = e.target.language.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const review = e.target.review.value;
    const info = {
      name,
      email,
      PhotoUrl,
      language,
      price,
      description,
      review,
    };
    fetch("http://localhost:5000/tuitorial", {
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
          toast.success("Tuitorial add in DataBase");
          form.reset();
        }
      });
  };
  return (
    <>
      <div>
        <h1 className="text-center lg:text-5xl md:text-2xl sm:text-lg bg-white p-5 mt-5">
          Add Tuitorial
        </h1>
        <form className="mx-5" onSubmit={HandleFormSubmit}>
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
                className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg"
                name="PhotoUrl"
              />
            </div>
            <div className="lg:flex md:flex justify-center gap-5 w-full">
              <div className="form-control my-[1rem] w-full">
                <input
                  type="text"
                  placeholder="language"
                  className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg w-full "
                  required
                  name="language"
                />
              </div>
              <div className="form-control my-[1rem] w-full">
                <input
                  type="text"
                  placeholder="Price"
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
                name="description"
              ></textarea>
            </div>
            <div className="form-control my-[1rem] w-full">
              <input
                type="text"
                placeholder="Review"
                className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg"
                required
                name="review"
              />
            </div>
            <div className="flex justify-center mt-[2rem] gap-12">
              <button
                className="bg-purple-600/50 px-5 py-2 rounded-xl text-lg text-white font-bold hover:bg-purple-500/50"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTuitorial;
