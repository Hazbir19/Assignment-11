import React from 'react'

const LoginPage = () => {
    return (
        <>
        <div>
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

            
        </div>
        </>
    )
}

export default LoginPage