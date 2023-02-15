import { useState, React } from "react";
import Delete from "../assets/delete.png"

const Cards = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState(new Date());
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    return inputValue.length >= 3 ? (setNotes([...notes, inputValue]), setInputValue("")) : null;
  };

  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes)
  }

  return (
    <div className="cards__container">
      <div className="card">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Let's create a note..."
          maxLength={200}
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>

        <div className="card__bottom">
          <div className="count">
            <p>{200 - inputValue.length} Remaining</p>
          </div>
          <div className="save">
            <button onClick={handleButtonClick}>save</button>
          </div>
        </div>
      </div>

      {notes.map((note, index) => (
        <div key={index} className="card sticky__card">
          <p>{note}</p>
          <div className="date__delete">
            <p>{date.toLocaleDateString()}</p>
            <img
              src={Delete}
              alt="delete"
              width={25}
              onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
