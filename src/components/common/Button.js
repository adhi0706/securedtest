const Button = ({
  text,
  onClick,
  to,
  className = "",
  filled = false,
  blogButton = false,
}) => {
  const hoverClassName = filled
    ? "bg-tertiary text-secondary hover:bg-transparent dark:hover:text-primary"
    : "hover:bg-tertiary hover:text-secondary";
  return (
    <button
      className={`px-2 py-1 whitespace-nowrap lg:px-4 lg:py-2 border-2 border-tertiary ${
        blogButton ? "rounded" : "rounded-lg"
      } ${hoverClassName} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
