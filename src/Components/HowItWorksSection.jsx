import React from "react";
import CustomCard from "./CustomCard";
import CustomCardContent from "./CustomCardContent";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "1. Search Tutor",
      desc: "Find tutors based on language and expertise.",
    },
    { title: "2. Book Lesson", desc: "Choose your time and book instantly." },
    {
      title: "3. Start Learning",
      desc: "Connect and begin your language journey.",
    },
  ];
  return (
    <div>
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <CustomCard key={step.title}>
              <CustomCardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </CustomCardContent>
            </CustomCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;
