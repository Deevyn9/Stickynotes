import React from 'react'

const Cards = () => {
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
        ></textarea>
        {/* <input type="text" placeholder="Let's create a note..." max={200} min={1}  /> */}
      </div>
    </div>
  );
}

export default Cards
