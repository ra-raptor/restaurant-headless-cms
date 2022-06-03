import React from 'react'

interface serachSugegstionInterface{
    arr : Array<string>,
    pickSerach : (word: string) => void
}

const SearchSuggestion = ({arr,pickSerach}:serachSugegstionInterface) => {
    
  const data = Object.values(arr)
  const notfound = <p className='not-found' onClick={() =>pickSerach('')}>Not Found</p>
    
  return (
    <section className='serach-sugegstion'>
        <div className='suggestion-wrapper'>
        {data.length == 0 && notfound}
        {data.map(word => {
            return <p onClick={() =>pickSerach(word)}>{word}</p>
        })}
        </div>
    </section>
  )
}

export default SearchSuggestion