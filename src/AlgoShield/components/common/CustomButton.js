const CustomButton = ({ className, text, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className="sss-custom-button-container">
      <button className={className}>{text}</button>
    </div>
  );
};

export default CustomButton;
