import React, { useState } from "react";

const ImageSearch = ({searchText}) => {
  const [text,setText]=useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
    setText('');
  }
  return (
    <form onSubmit={onSubmit}  className="flex flex-row	justify-center items-center">
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-3"
          id="exampleInputSearch1"
          aria-describedby="searchHelp"
          placeholder="Search Image Term ....... "
          onChange={(e)=>setText(e.target.value)}
          value={text}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Search
      </button>
    </form>
  );
};

export default ImageSearch;
