import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer",
        {
          "bg-[#E67E22] text-white hover:bg-[#d66f15] hover:-translate-y-1":
            variant === "primary",

          "border border-[#22333B] text-[#22333B] hover:bg-[#22333B] hover:text-white":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;