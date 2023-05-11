import React, { useState} from "react";
import DataContext from "./DataContext";



const DataProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [ rowSelection, setRowSelection] = useState({});

    return (
        <DataContext.Provider value={{ selectedId, setSelectedId, rowSelection, setRowSelection } } >
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;