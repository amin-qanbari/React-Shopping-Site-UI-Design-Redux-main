import React, { useState , createContext } from 'react'


 export const searchContext = createContext()
 export const setSearchContext = createContext()

const SearchContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <searchContext.Provider value={searchTerm}>
      <setSearchContext.Provider value={setSearchTerm}>
        {props.children}
        </setSearchContext.Provider>
    </searchContext.Provider>

  )
}

export default SearchContextProvider