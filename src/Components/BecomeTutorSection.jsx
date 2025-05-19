import ButtonSecondary from "./ButtonSecondary";
import ImageGif from "../assets/Video tutorial.gif";
import CustomBanner from "./CustomBanner";

const BecomeTutorSection = () => {
  return (
    <section className="py-12 shadow-sm rounded-md text-center lg:flex md:flex">
      <div
        className="text-center flex items-center
      mx-2"
      >
        <div>
          <CustomBanner
            title={"Become a Tutor"}
            description={
              " Share your knowledge and help students learn new languages worldwide."
            }
          ></CustomBanner>
          <ButtonSecondary ButtonTitle={"Join as a Tutor"}></ButtonSecondary>
        </div>
      </div>
      <div className="mt-8">
        <img
          src={ImageGif}
          alt="Become a Tutor"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default BecomeTutorSection;
