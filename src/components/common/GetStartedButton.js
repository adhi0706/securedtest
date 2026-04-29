import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const GetStartedButton = ({
  text,
  onClick,
  to,
  className = "",
  filled = false,
}) => {
  const navigate = useRouter();
  const hoverClassName = filled
    ? "bg-tertiary text-secondary hover:bg-transparent dark:hover:text-primary"
    : "hover:bg-tertiary hover:text-secondary";
  return (
    <button
      className={`flex space-x-2 justify-center items-center px-2 py-1 w-36 whitespace-nowrap lg:px-4 lg:py-2 border-2 border-tertiary rounded-full ${hoverClassName} ${className}`}
      onClick={to ? () => navigate.push(to) : onClick}
    >
      <div>
        Get Started
        </div>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default GetStartedButton;
