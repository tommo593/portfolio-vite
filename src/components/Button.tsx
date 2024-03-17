type ButtonProps = {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button className="text-center rounded border border-gray-600" type={type}>
      <label className="bold-16 cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
