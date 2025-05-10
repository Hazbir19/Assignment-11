const CustomBanner = ({ title, description }) => {
  return (
    <div className="w-full bg-[#f9fbfc] my-4 py-4 px-6 text-center shadow-sm border border-gray-100 rounded-lg p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#05154e] mb-4 ">
        {title}
      </h1>
      <p className="text-lg sm:text-xl text-[#05154e] max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default CustomBanner;
