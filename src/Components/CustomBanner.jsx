const CustomBanner = ({ title, description }) => {
  return (
    <div className="w-full bg-background my-4 py-4 px-6 text-center shadow-sm border border-gray-100 rounded-lg p-4">
      <h1 className="text-xl lg:text-4xl md:text-2xl  font-bold text-text mb-4 ">
        {title}
      </h1>
      <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CustomBanner;
