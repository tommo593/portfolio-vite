type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className="text-center items-center rounded border border-gray-100 shadow py-2 bg-gradient-to-r from-blue-200 to-blue-400"
      type={type}
    >
      <label className="bold-16 cursor-pointer text-white">{title}</label>
    </button>
  );
};

export default Button;
