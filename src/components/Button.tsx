type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className="text-center items-center rounded border border-transparent shadow py-2 bg-gradient-to-t from-baby_blue to-dark_baby_blue"
      type={type}
    >
      <label className="bold-16 cursor-pointer text-white">{title}</label>
    </button>
  );
};

export default Button;
