import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommonSelector } from "../../redux/commonSlice";

const Loader = () => {
  const { isLoading } = useSelector(getCommonSelector);
  return (
    isLoading && (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          position: "fixed",
          zIndex: "1000",
        }}
      >
        <p
          style={{
            position: "relative",
            top: "40%",
            left: "38%",
          }}
        >
          Loading...
        </p>
      </div>
    )
  );
};

export default Loader;
