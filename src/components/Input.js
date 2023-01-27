const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="font-bold py-4 px-8 my-4 outline-0 bg-transparent border-2 border-white text-white text-center placeholder:text-white mg:text-black mg:placeholder:text-black mg:font-normal"
    />
  )
}

export default Input;
