import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { HandleLogIn, HandleGoogleSignIn } = useContext(ContextMain);
  const navigate = useNavigate();
  const HandleSubmitBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    HandleLogIn(email, password)
      .then((result) => {
        toast.success("Your Logged In");
        navigate("/");
        return;
      })
      .catch((error) => {
        toast.error("You email and password invaild ");
      });
  };
  const GoogleBtn = () => {
    HandleGoogleSignIn()
      .then((result) => {
        console.log(result);
        toast.success("Your Logged In");
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form className="mx-5" onSubmit={HandleSubmitBtn}>
        <div className="max-w-screen-sm mx-auto bg-gradient-to-tr from-purple-500/50 to-blue-200 rounded-lg py-[5rem] px-[2rem] mt-[5rem]">
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
          <div className="flex justify-center mt-[2rem] gap-5">
            <button className="bg-purple-600/50 px-5 py-2 rounded-xl text-lg text-white font-bold hover:bg-purple-500/50 w-1/2">
              Login
            </button>
            <div className="w-1/2 mx-auto">
              <button
                className="flex items-center justify-between bg-white px-5 py-2 rounded-xl text-lg text-black font-bold hover:bg-gray-200/50 w-full"
                onClick={GoogleBtn}
              >
                <img
                  src="https://i.ibb.co.com/LPZsMq5/Google-Icons-09-512-1.png"
                  alt=""
                  className="w-[1.5rem]"
                />
                SignIn With Google
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
