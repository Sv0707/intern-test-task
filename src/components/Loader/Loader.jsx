import Spinner from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Spinner type="ThreeDots" color="black" height={100} width={100} />
    </div>
  );
};

export default Loader;
