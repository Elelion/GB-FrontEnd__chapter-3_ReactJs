import {CradleLoader} from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spinner = () => {
  const delSpinner = useSelector((state) => state.SpinnerReducer.spinnerFlg);

  return (
    <CradleLoader
      visible={delSpinner}
      type="Rings"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default Spinner;
