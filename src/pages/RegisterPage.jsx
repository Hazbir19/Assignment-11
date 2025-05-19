import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import UseAxiosHook from "../Hooks/UseAxiosHook";
import axios from "axios";

const RegisterPage = () => {
  const { handleEmailSignIn, validatePassword } = useContext(ContextMain);
  const AxiosHook = UseAxiosHook();
  const navigate = useNavigate();
  const image_hosting_key = import.meta.env.VITE_Image_hosting;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.image.files[0];
    const password = e.target.password.value;
    const Studentrole = e.target.student.value;
    const validPassword = validatePassword(password);
    if (validPassword) {
      toast.error(validPassword);
      return;
    }
    const formData = new FormData();
    formData.append("image", photo);
    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageUrl = res.data.data.display_url;

    const Newuser = { name, email, role: Studentrole, imageUrl };

    handleEmailSignIn(email, password)
      .then((result) => {
        console.log("result before update", result);
        const Currentuser = result.user;
        updateProfile(Currentuser, {
          displayName: name,
          photoURL: imageUrl,
        }).then((result) => {
          //User create Operation: method post hit in this localpath
          fetch("https://assignment-11-server-six-liard.vercel.app/users", {
            method: "POST", //user create method
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Newuser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                toast.success("User add in DataBase");
              }
            });
          toast.success("SignIn SuccessFully");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error("This Id Already Exist");
      });
  };
  return (
    <>
      <form onSubmit={HandleFormSubmit}>
        <div className="max-w-screen-sm mx-auto  rounded-lg py-[5rem] px-[2rem] mt-[5rem] shadow-md">
          <div className="lg:flex md:flex justify-evenly gap-5 w-full">
            <div className="form-control">
              <label className="label"></label>
              <input
                type="text"
                placeholder="UserName"
                className="input input-bordered focus:bg-gray-200/50  focus:font-semibold focus:text-lg  lg:w-[16rem] md:w-[16rem]"
                required
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered focus:bg-gray-200/50  focus:font-semibold  focus:text-lg lg:w-[18rem] md:w-[18rem] "
                required
                name="email"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered focusfocus:font-semibold  focus:text-lg"
              required
              name="password"
            />
          </div>
          <div className="lg:flex md:flex items-center gap-5 w-full">
            <div className="form-control my-2">
              <fieldset class="fieldset">
                <input type="file" class="file-input" name="image" />
              </fieldset>
            </div>
            <div>
              <fieldset class="fieldset">
                <select class="select" name="student">
                  <option>student</option>
                  <option>teacher</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="flex justify-center mt-[2rem]">
            <button className="bg-purple-600/50 px-5 py-2 rounded-xl text-lg text-white font-bold hover:bg-purple-500/50">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
