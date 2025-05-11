import ButtonSecondary from "./ButtonSecondary";
import ImageGif from "../assets/Video tutorial.gif";

const BecomeTutorSection = () => {
  return (
    <section className="py-12 shadow-sm border border-gray-100 rounded-md text-center lg:flex md:flex">
      <div
        className="text-center flex items-center
      mx-2"
      >
        <div>
          <h2 className="lg:text-3xl font-semibold mb-4">Become a Tutor</h2>
          <p className="mb-6">
            Share your knowledge and help students learn new languages
            worldwide.
          </p>
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
