import React, { useContext, useEffect } from "react";
import { ContextMain } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomBanner from "../Components/CustomBanner";
import LearningBenefitsSection from "../Components/LearningBenefitsSection";
import BecomeTutorSection from "../Components/BecomeTutorSection";
import HeroSection from "../Components/HeroSection";
import HowItWorksSection from "../Components/HowItWorksSection";
import OfferCourses from "../Components/OfferCourses";
import { motion } from "framer-motion";

const HomePage = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -50,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6,
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { user } = useContext(ContextMain);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      feedback:
        "The tutors on this platform are outstanding! I've learned so much in just a few weeks.",
      avatar: "https://i.ibb.co/Jjp7QNq6/Teacher-10.jpg",
      role: "Student",
    },
    {
      id: 2,
      name: "Michael Smith",
      feedback:
        "Great experience with professional tutors. Highly recommend it!",
      avatar: "https://i.ibb.co/QwqVrmw/Anycolor-20250217-183138.png",
      role: "Parent",
    },
    {
      id: 3,
      name: "Sarah Brown",
      feedback:
        "This platform has transformed the way I learn new languages. Amazing support!",
      avatar: "https://i.ibb.co/SxRL9L4/Teacher-4.jpg",
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
    {
      id: 4,
      name: "Josim Babu",
      subject: "Spainish",
      rating: 5.0,
      image: "https://i.ibb.co/Z0bRBZV/Teacher-3.jpg",
      reviews: 400,
      price: "$35/hr",
    },
  ];

  const languageCategories = [
    {
      logo: "https://i.ibb.co/bgVLxmXc/English.png",
      category: "English",
    },
    {
      logo: "https://i.ibb.co/bg4dztWR/Spanish.jpg",
      category: "Spainish",
    },
    {
      logo: "https://i.ibb.co/ksQ6DYTr/Fracnh.jpg",
      category: "French",
    },
    {
      logo: "https://i.ibb.co/FqLS9K7z/Chinese-logo.png",
      category: "Chinese",
    },
    {
      logo: "https://i.ibb.co/S4Q0J71x/Arabic-logo.png",
      category: "Arabic",
    },
    {
      logo: "https://i.ibb.co/gbzfGQKt/Russian-logo.jpg",
      category: "Russian",
    },
    {
      logo: "https://i.ibb.co/GQNmQhM7/Japanese-language.jpg",
      category: "Japanese",
    },
    {
      logo: "https://i.ibb.co/xSPr86pz/German-language.jpg",
      category: "German",
    },
    {
      logo: "https://i.ibb.co/ZRpf7vDV/Hindi-logo.jpg",
      category: "Hindi",
    },
  ];
  const communityHighlights = [
    "Over 50,000 students enrolled",
    "Active tutors from 30+ countries",
    "Daily interactive sessions",
    "Community events and webinars",
    "Language challenges and rewards",
    "Global student network",
    "Real-time Q&A with mentors",
    "Certificate on course completion",
  ];
  const upcomingCourses = [
    "Mandarin Mastery - Intermediate",
    "Spanish for Travel",
    "Business French Basics",
    "German Conversation Skills",
    "Arabic for Beginners",
    "Advanced English Grammar",
    "Japanese Writing Workshop",
    "Hindi Speaking Practice",
  ];
  const successStories = [
    {
      id: 1,
      name: "Ayesha Khan",
      story:
        "Started learning Arabic and landed a translation job in 6 months!",
    },
    {
      id: 2,
      name: "Liam Chen",
      story:
        "Passed JLPT N3 with flying colors using our structured Japanese modules.",
    },
    {
      id: 3,
      name: "Sophie Müller",
      story:
        "Improved my English fluency and got promoted to team lead at work.",
    },
    {
      id: 4,
      name: "Carlos Rivera",
      story: "Thanks to the Spanish classes, I now teach Spanish locally!",
    },
    {
      id: 5,
      name: "Rania El-Tayeb",
      story: "Our daughter became fluent in French and earned a scholarship.",
    },
    {
      id: 6,
      name: "Jinwoo Park",
      story:
        "Mastered business English and expanded my online business internationally.",
    },
    {
      id: 7,
      name: "Emilia Rossi",
      story: "The Italian beginner course helped me reconnect with my roots.",
    },
    {
      id: 8,
      name: "Zara Patel",
      story:
        "After learning Hindi, I could finally talk to my grandparents in their language.",
    },
  ];
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div class="max-w-screen-2xl mx-auto">
          {/* Hero Section */}
          <HeroSection></HeroSection>
          {/* Stats Section */}
          <div
            data-aos="fade-up"
            class="stats stats-vertical lg:w-full lg:stats-horizontal md:stats-horizontal shadow w-11/12 mx-5 my-8 bg-background  rounded-lg overflow-hidden"
          >
            <div class="stat">
              <div class="stat-title text-text font-title font-bold">
                Tuitor Count
              </div>
              <div class="stat-value text-accent">31K</div>
              <div class="stat-desc">Exprience Tuitor</div>
            </div>

            <div class="stat">
              <div class="stat-title text-text font-title font-bold">
                Rating
              </div>
              <div class="stat-value text-accent">47,200</div>
              <div class="stat-desc">5 star tuitor</div>
            </div>

            <div class="stat">
              <div class="stat-title text-text font-title font-bold">
                Subjects
              </div>
              <div class="stat-value text-accent">120+</div>
              <div class="stat-desc">Subject taughts</div>
            </div>
            <div class="stat">
              <div class="stat-title text-text font-title font-bold">Users</div>
              <div class="stat-value text-accent">1,200</div>
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
              <div
                data-aos="fade-down"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {languageCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                    onClick={() => navigate("/find-tuitor")}
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
          <OfferCourses></OfferCourses>
          {/* Community Highlights */}
          <section data-aos="fade-up" className="py-12 px-4">
            <CustomBanner
              title={"Community Highlights"}
              description={
                "Our global community makes learning exciting and connected."
              }
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {communityHighlights.map((item, index) => (
                <li
                  key={index}
                  className="bg-background p-4 rounded-lg shadow-md text-center"
                >
                  <p className="text-lg font-medium text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Upcoming Courses */}
          <section data-aos="fade-down" className="py-12 px-4">
            <CustomBanner
              title={"Upcoming Courses"}
              description={"Don’t miss out on our latest offerings."}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {upcomingCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
                >
                  <h3 className="text-xl font-semibold text-text">{course}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Success Stories */}
          <section data-aos="fade-up" className="py-12 px-4">
            <CustomBanner
              title="Success Stories"
              description="See how learners have transformed their lives through language."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-background p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold text-text mb-2">
                    {story.name}
                  </h3>
                  <p className="text-gray-700">"{story.story}"</p>
                </div>
              ))}
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="py-12">
            <h2 className="text-4xl font-bold text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background p-6 rounded-lg shadow-md"
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
                  <p className="text-gray-700 italic">
                    "{testimonial.feedback}"
                  </p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
              {popularTutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-background flex flex-col h-[450px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-48 object-fill rounded-tr-lg rounded-br-lg transition-transform duration-300 hover:scale-105"
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
                    <button className="mt-4  text-text px-4 py-2 rounded-lg bg-accent font-body font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
