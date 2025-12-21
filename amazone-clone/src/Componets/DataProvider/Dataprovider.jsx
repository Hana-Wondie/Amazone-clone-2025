import {createContext, useReducer} from 'react'
export const DataContext = createContext()
function Dataprovider({ children, reducer, initialState }) {
  return (
    <>
      <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export default Dataprovider
