import studyingIllustration from "../assets/Online learning-amico.png";
import ButtonSecondary from "./ButtonSecondary";
import CustomInput from "./CustomInput";
const HeroSection = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12">
          <h1 className="text-xl lg:text-4xl md:text-2xl font-bold text-text mb-4">
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
