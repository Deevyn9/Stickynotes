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

        <div className="card__bottom">
            <div className="count">
                <p>200 Remaining</p>
            </div>
            <div className="save">
                <button>save</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards
