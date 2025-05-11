import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextMain } from "../Context/ContextApi";
import loginImage from "../assets/Mobile login-rafiki.png";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
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
  return (
    <>
      <div>
        <div className="px-4 sm:px-6 lg:px-4 py-2">
            <div class="text-center lg:text-left">
              <h1 class="lg:text-5xl md:text-3xl text-lg font-bold text-center my-2">Login now!</h1>
            </div>
          <div class="hero w-full rounded-lg  overflow-hidden border-2 border-gray-200/50 shadow-sm my-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div>
                <div>
                  <img src={loginImage} alt="" />
                </div>
              </div>
              <div class="rounded-xl w-full">  
                <form className="mx-5 w-full lg:flex md:flex lg:justify-center lg:items-center" onSubmit={HandleSubmitBtn}>
                  <div className="rounded-lg shadow-sm py-4 px-8 h-[35rem] bg-gray-200/50 w-full pt-24">
                   <div className="">
                     <div className="w-full ">
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
                    <div className="lg:flex justify-center items-center mt-[2rem] gap-5">
                      <div>
                        <button
                          className={`bg-purple-600/50 px-5 py-2 rounded-xl lg:text-lg   text-white font-bold hover:bg-purple-500/50  my-2 w-full`}
                        >
                          Login
                        </button>
                      </div>
                      <div className="my-2 flex items-center justify-center gap-2 hover:bg-gray-200/50 py-2 px-5 rounded-lg hover:cursor-pointer hover:border hover:border-gray-200 w-full">
                        <FaGoogle className="lg:text-3xl md:text-xl text-lg text-purple-600/50 " />
                        <button
                          className="rounded-md lg:text-lg md:text-base text-base text-black font-medium w-full"
                          onClick={GoogleBtn}
                        >
                          SignIn With Google
                        </button>
                      </div>
                    </div>
                   </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
