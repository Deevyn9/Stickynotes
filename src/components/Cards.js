import {useState, React} from 'react'

const Cards = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue.length >= 3) {
            setNotes([...notes, inputValue]);
            setInputValue("");
        } else {

        }
    };

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

        </div>
      ))}
    </div>
  );
}

export default Cards
