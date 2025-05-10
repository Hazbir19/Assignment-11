import ButtonSecondary from "./ButtonSecondary";

const BecomeTutorSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
      <h2 className="text-3xl font-semibold mb-4">Become a Tutor</h2>
      <p className="mb-6">
        Share your knowledge and help students learn new languages worldwide.
      </p>
      <ButtonSecondary ButtonTitle={"Join as a Tutor"}></ButtonSecondary>
    </section>
  );
};

export default BecomeTutorSection;
