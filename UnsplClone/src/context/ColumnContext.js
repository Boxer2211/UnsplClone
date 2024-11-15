import React, { createContext, useContext, useState } from 'react'

const ColumnContext = createContext()

export const useColumnContext = () => useContext(ColumnContext)

export const ColumnProvider = ({ children }) => {
  const [columns, setColumns] = useState(3)

  const toggleColumns = () => {
    setColumns(prev => (prev === 3 ? 5 : 3))
  }

  return <ColumnContext.Provider value={{ columns, toggleColumns }}>{children}</ColumnContext.Provider>
}
