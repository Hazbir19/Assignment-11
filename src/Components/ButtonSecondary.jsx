const ButtonSecondary = ({ ButtonTitle }) => {
  return (
    <button
      className={`bg-[#f7a3f0] hover:bg-[#cd6ee4] text-[#0e083d] font-semibold py-2 px-4 rounded-xl`}
    >
      {ButtonTitle}
    </button>
  );
};

export default ButtonSecondary;
