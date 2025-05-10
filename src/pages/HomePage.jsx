import React, { useContext } from "react";
import { ContextMain } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CustomBanner from "../Components/CustomBanner";
import LearningBenefitsSection from "../Components/LearningBenefitsSection";
import BecomeTutorSection from "../Components/BecomeTutorSection";

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
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      feedback:
        "The tutors on this platform are outstanding! I've learned so much in just a few weeks.",
      avatar: "https://example.com/avatars/emily.jpg",
      role: "Student",
    },
    {
      id: 2,
      name: "Michael Smith",
      feedback:
        "Great experience with professional tutors. Highly recommend it!",
      avatar: "https://example.com/avatars/michael.jpg",
      role: "Parent",
    },
    {
      id: 3,
      name: "Sarah Brown",
      feedback:
        "This platform has transformed the way I learn new languages. Amazing support!",
      avatar: "https://example.com/avatars/sarah.jpg",
      role: "Student",
    },
  ];

  const popularTutors = [
    {
      id: 1,
      name: "Sophia Williams",
      subject: "English",
      rating: 4.9,
      image: "https://i.ibb.co.com/0ZZLLmJ/Teacher-9.jpg",
      reviews: 320,
      price: "$30/hr",
    },
    {
      id: 2,
      name: "James Wilson",
      subject: "Spanish",
      rating: 4.8,
      image: "https://i.ibb.co.com/S6VSF86/Teacher-1.jpg",
      reviews: 250,
      price: "$25/hr",
    },
    {
      id: 3,
      name: "Isabella Martinez",
      subject: "French",
      rating: 5.0,
      image: "https://i.ibb.co.com/SxRL9L4/Teacher-4.jpg",
      reviews: 400,
      price: "$35/hr",
    },
  ];

  const languageCategories = [
    {
      logo: "https://example.com/logos/english.png",
      category: "English",
    },
    {
      logo: "https://example.com/logos/spanish.png",
      category: "Spainish",
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
          <div className="max-w-screen-2xl mx-auto px-4 py-12">
            <CustomBanner
              title={"Choose a Language"}
              description={"Select a language to find tutors."}
            />
            {/* language Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/find-tutors/${category.category}`)}
                >
                  <img
                    src={category.logo}
                    alt={category.category}
                    className="w-12 h-12"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold">
                      {category.category}
                    </h3>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-500">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Other Sections */}
        <LearningBenefitsSection></LearningBenefitsSection>

        {/* Testimonials Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </section>
        {/* Become A Teacher */}
        <BecomeTutorSection></BecomeTutorSection>
        {/* Popular Tutors Section */}
        <section className="py-12">
          <CustomBanner
            className="text-4xl font-bold text-center mb-8"
            title={"Popular Tutors"}
            description={
              "Explore our top-rated tutors who are ready to help you achieve your learning goals."
            }
          ></CustomBanner>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {popularTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white flex flex-col h-[450px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-48 object-cover rounded-tr-lg rounded-br-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold">{tutor.name}</h3>
                    <p className="text-gray-600">Subject: {tutor.subject}</p>
                    <p className="text-gray-600">
                      Rating: {tutor.rating} ⭐ ({tutor.reviews} reviews)
                    </p>
                    <p className="text-gray-600">Price: {tutor.price}</p>
                  </div>
                  <button className="mt-4  text-[#05154e] px-4 py-2 rounded-lg bg-[#e3c0f6]">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
