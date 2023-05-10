import React, { useState} from "react";
import DataContext from "./DataContext";



const DataProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <DataContext.Provider value={{ selectedId, setSelectedId }} >
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;