import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHPCharacters,
  clearHPCharacters,
} from "../../../store/actions/harryPotterAction";
import HarryPotterItem from "../HarryPotterItem/HarryPotterItem";
import "./HarryPotterList.css";
import { Button } from "@material-ui/core";
import Spinner from "../../Spinner/Spinner";

const HarryPotterList = () => {
  const characters = useSelector((state) => state.HarryPotterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHPCharacters());
  }, []);

  const reloadData = () => {
    dispatch(clearHPCharacters());
    dispatch(getHPCharacters());
  };
  return (
    <>
      <Button variant="contained" onClick={reloadData}>
        Обновить данные
      </Button>
      <Spinner />
      <div className="wrapper">
        <ul>
          {characters?.length
            ? characters.map((el, index) => (
                <HarryPotterItem key={index} character={el} />
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default HarryPotterList;
