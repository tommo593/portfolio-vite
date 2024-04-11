type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
};

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className="items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue py-2 text-center text-white_text shadow"
      type={type}
    >
      <label className="bold-16 text-white cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
