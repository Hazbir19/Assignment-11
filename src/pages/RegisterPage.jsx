import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { handleEmailSignIn, validatePassword } = useContext(ContextMain);
  const navigate = useNavigate();
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const photo = e.target.PhotoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { name, email };
    const validPassword = validatePassword(password);
    if (validPassword) {
      toast.error(validPassword);
      return;
    }
    handleEmailSignIn(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          //User create Operation: method post hit in this localpath
          fetch("https://sever-silde.vercel.app/users", {
            method: "POST", //user create method
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
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
        <div className="max-w-screen-sm mx-auto bg-gradient-to-tr from-purple-500/50 to-blue-200 rounded-lg py-[5rem] px-[2rem] mt-[5rem]">
          <div className="form-control">
            <label className="label"></label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg"
              name="PhotoUrl"
            />
          </div>
          <div className="lg:flex md:flex justify-evenly gap-5 w-full">
            <div className="form-control">
              <label className="label"></label>
              <input
                type="text"
                placeholder="UserName"
                className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg  lg:w-[16rem] md:w-[16rem]"
                required
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg lg:w-[18rem] md:w-[18rem] "
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
              className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg"
              required
              name="password"
            />
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
