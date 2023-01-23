import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
};
export default Loader;
