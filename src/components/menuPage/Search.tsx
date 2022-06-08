import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { textinput_handler_type,SearchInterface } from '../../utils/Interface'



const Search = ({search,serachText,setserachText,setserachVisible}:SearchInterface) => {
    const handleSearchInput = (e:textinput_handler_type) => {
        setserachText(e.target.value)
        setserachVisible(true)
    }
  return (
    <section className='search'>
          <div className="input-container">
            <FaSearch />
            <input type="text" value={serachText} onChange={handleSearchInput} placeholder='Search your favorite dish..'/>
          </div>
          <button onClick={search}>Search</button>
        </section>
  )
}

export default Search