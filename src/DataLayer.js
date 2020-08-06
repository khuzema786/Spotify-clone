import React, { createContext, useContext, useReducer } from "react";

// Create of data layer
export const DataLayerContext = createContext();

//  Actual DataLayer that is wrapping our data in contextAPI, here children means the <App /> component wrapped inside DataLayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// Dispatch
export const useDataLayerValue = () => useContext(DataLayerContext);
