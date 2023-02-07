import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className='search__bar'>
        <SearchIcon />
        <input type="text" placeholder='type to search...'/>
    </div>
  )
}

export default Search
