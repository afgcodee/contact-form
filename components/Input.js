function Input({ type, placeholder, label, ...props }) {
  return (
    <>
      <div className="w-full">
        <label className="text-[14px] lg:text-[18px] font-medium">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full h-[35px] lg:h-[45px] py-2 px-3 mt-[16px] text-[14px] lg:text-[18px] text-white bg-gray-900 outline-none border-y-[1px] border-stone-400 rounded-xl"
          {...props}
       />
      </div>
    </>
  );
}

export default Input;
