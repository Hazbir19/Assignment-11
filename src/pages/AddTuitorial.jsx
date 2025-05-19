import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import toast from "react-hot-toast";
import { AxiosHook } from "../Hooks/UseAxiosHook";

const AddTuitorial = () => {
  const { user } = useContext(ContextMain);
  const image_hosting_key = import.meta.env.VITE_Image_hosting;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.name;
    const email = user.email;
    const PhotoUrl = e.target.image.files[0];
    const language = e.target.language.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const review = e.target.review.value;
    const formData = new FormData();
    formData.append("image", PhotoUrl);
    const res = await AxiosHook.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageUrl = res.data.data.display_url;
    const info = {
      name,
      email,

      language,
      price,
      description,
      review,
      imageUrl,
    };
    fetch("https://assignment-11-server-six-liard.vercel.app/tuitorial", {
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
        <form className="mx-5" onSubmit={HandleFormSubmit}>
          <div className="max-w-screen-sm mx-auto shadow-sm rounded-lg py-8 px-8 mt-8">
            <div className="lg:flex md:flex justify-evenly gap-5 w-full">
              <div className="form-control my-[1rem]">
                <input
                  type="text"
                  placeholder={user?.name}
                  className="input input-bordered focus:bg-gray-200/50 focus:font-semibold focus:text-lg  lg:w-[16rem] md:w-[16rem]"
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
            <div className="form-control my-2">
              <fieldset class="fieldset">
                <input type="file" class="file-input" name="image" />
              </fieldset>
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
                class="textarea textarea-bordered w-full focus:bg-gray-200/50 focus:font-semibold  focus:text-lg my-[1rem] textarea-lg"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
            <div className="form-control my-[1rem] w-full">
              <input
                type="text"
                placeholder="Review"
                className="input input-bordered focus:bg-gray-200/50  focus:font-semibold  focus:text-lg"
                required
                name="review"
              />
            </div>
            <div className="flex justify-center mt-[2rem] gap-12">
              <button
                className="bg-accent text-text px-5 py-2 rounded-xl text-lg  font-semibold font-body"
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
