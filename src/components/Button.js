const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-lime-500 py-2 w-44 absolute -bottom-24 right-0 text-lg rounded-3xl text-white mt-10 md:mt-4 md:-bottom-16 mg:-bottom-16 sm:w-36"
    >
      {text}
    </button>
  );
};

export default Button;
