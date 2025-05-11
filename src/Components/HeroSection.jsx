import studyingIllustration from "../assets/Online learning-amico.png";
import ButtonSecondary from "./ButtonSecondary";
import CustomInput from "./CustomInput";
const HeroSection = () => {
  return (
    <section className="bg-blue-50 text-center my-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Language Tutor
          </h1>
          <p className="mb-6 text-lg">
            Learn any language from expert tutors around the world.
          </p>
          <div className="flex justify-center gap-2">
            <CustomInput
              placeholder="Search for a language..."
              className="w-64"
            />
            <ButtonSecondary ButtonTitle="Search"></ButtonSecondary>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={studyingIllustration}
            alt="Studying Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
