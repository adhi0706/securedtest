
const CustomDivider = ({ classname }) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`sss-custom-divider-contianer ${classname}`}>
        <div className="sss-custom-divider"></div>
      </div>
    </div>
  );
};

export default CustomDivider;
