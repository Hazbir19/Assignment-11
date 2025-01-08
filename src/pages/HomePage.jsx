import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
  const { HandleLogIn, HandleGoogleSignIn, user } = useContext(ContextMain);
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
        navigate("/");
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const languageCategories = [
    {
      logo: "https://example.com/logos/english.png",
      category: "English",
    },
    {
      logo: "https://example.com/logos/spanish.png",
      category: "Spanish",
    },
    {
      logo: "https://example.com/logos/french.png",
      category: "French",
    },
    {
      logo: "https://example.com/logos/chinese.png",
      category: "Chinese",
    },
    {
      logo: "https://example.com/logos/arabic.png",
      category: "Arabic",
    },
    {
      logo: "https://example.com/logos/russian.png",
      category: "Russian",
    },
    {
      logo: "https://example.com/logos/japanese.png",
      category: "Japanese",
    },
    {
      logo: "https://example.com/logos/german.png",
      category: "German",
    },
    {
      logo: "https://example.com/logos/hindi.png",
      category: "Hindi",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="hero w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Login now!</h1>
              <p class="py-6">
                The login feature ensures secure access to user-specific data,
                personalized experiences, and protects sensitive information
                from unauthorized access.
              </p>
            </div>
            <div class="bg-gradient-to-tr from-purple-500/50 to-blue-200 rounded-xl  w-8/12 py-[3rem] my-[2rem] shrink-0 shadow-2xl">
              <form className="mx-5" onSubmit={HandleSubmitBtn}>
                <div className="max-w-screen-sm mx-auto  rounded-lg py-[5rem] px-[2rem] mt-[5rem] border-2 border-gray-200">
                  <div className="lg:flex md:flex justify-evenly gap-5 w-full">
                    <div className="form-control w-full">
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="UserName"
                        className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold focus:text-lg  "
                        required
                        name="username"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label"></label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered focus:bg-gray-200/50 focus:text-white focus:font-semibold  focus:text-lg  "
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
                    <button
                      className={`bg-purple-600/50 px-5 py-2 rounded-xl text-lg text-white font-bold hover:bg-purple-500/50 w-1/2 ${
                        user && "hidden"
                      }`}
                    >
                      Login
                    </button>
                    <div className="w-1/2 mx-auto">
                      <button
                        className="flex items-center justify-between bg-white px-5 py-2 rounded-xl lg:text-lg md:text-sm text-black font-bold hover:bg-gray-200/50 w-full"
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
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow w-full bg-white rounded-lg overflow-hidden">
          <div class="stat">
            <div class="stat-title">Tuitor Count</div>
            <div class="stat-value">31K</div>
            <div class="stat-desc">Exprience Tuitor</div>
          </div>

          <div class="stat">
            <div class="stat-title">Rating</div>
            <div class="stat-value">47,200</div>
            <div class="stat-desc">5 star tuitor</div>
          </div>

          <div class="stat">
            <div class="stat-title">Subjects</div>
            <div class="stat-value">120+</div>
            <div class="stat-desc">Subject taughts</div>
          </div>
          <div class="stat">
            <div class="stat-title">Users</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc">New users 500+</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            {languageCategories.map((category) => (
              <>
                <div>
                  <img src={category.logo} alt="" />
                  <p>{category.category}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
