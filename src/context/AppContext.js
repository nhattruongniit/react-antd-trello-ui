import React from 'react';

// mock data
import { data } from "../data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [trello, setTrello] = React.useState(data);

  function onDragEndList(result) {
    const { source, destination } = result;
    const columns = [...trello.columns];
    const listSpliced = columns.splice(source.index, 1)[0];
    columns.splice(destination.index, 0, listSpliced)

    setTrello(prevState => ({
      ...prevState,
      columns
    }))
  }

  function onDragEndCard(result) {
    console.log('onDragEndCard: ', result)
  } 

  // console.log("trello: ", trello.columns)

  return (
    <AppContext.Provider 
      value={{ 
        trello,
        onDragEndList,
        onDragEndCard
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);