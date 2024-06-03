// Context.js
import React, { createContext, useContext, useState } from "react";

const PropertyContext = createContext();

export const usePropertyContext = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState("");

  const handleSetSelectedProperty = (propertyType) => {
    setSelectedProperty(propertyType);
  };

  return (
    <PropertyContext.Provider
      value={{
        selectedProperty,
        setSelectedProperty: handleSetSelectedProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
