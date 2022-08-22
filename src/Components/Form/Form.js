import "../../style.css";
import { Button } from "@material-ui/core";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewMessage } from "../../store/actions/messageAction";
import { useParams } from "react-router-dom";

const Form = () => {
  const [authorList, setAuthorList] = useState([]);
  const [textList, setTextList] = useState([]);
  const { name } = useParams();
  const dispatch = useDispatch();
  const newMessage = useSelector((state) => state.MessageReducer[name]);
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addNewMessage({
        chatName: name,
        name: authorList,
        text: textList,
      })
    );
  };

  return (
    <div className="form">
      <form>
        <input
          ref={inputRef}
          className="author"
          type="text"
          placeholder="Author"
          value={authorList}
          onChange={(e) => setAuthorList(e.target.value)}
        />
        <input
          className="text"
          type="text"
          placeholder="Text"
          value={textList}
          onChange={(e) => setTextList(e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </form>

      <ul>
        {newMessage.map((obj, index) => (
          <li key={index}>
            {obj.name} - {obj.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
