import Text from "../Text";

const Button = (props) => {
  // default props
  const {
    buttonText,
    Icon,
    textClasses = "text-white px-2",
    iconClasses = "text-3xl text-white",
    buttonClasses = "bg-blue-500 shadow-lg shadow-blue-300",
    handleClick,
  } = props;
  console.log(buttonClasses);
  return (
    <div>
      <button
        className={`${buttonText ? "w-auto" : "w-10"} px-2 flex justify-center items-center h-10 rounded-full ${buttonClasses}`}
        onClick={handleClick}
      >
        {buttonText ? <Text text={buttonText} classes={textClasses} /> : null}
        <Icon className={iconClasses} />
      </button>
    </div>
  );
};

export default Button;
