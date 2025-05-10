import Card from "./Card";
import CardContent from "./CardContent";

const LearningBenefitsSection = () => {
  const benefits = [
    "Boost your brain power",
    "Open global career opportunities",
    "Connect with different cultures",
    "Access 100+ language courses",
  ];
  return (
    <>
      <div>
        <section className="py-12 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Learn a Language?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-lg font-medium">
                  {benefit}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningBenefitsSection;
