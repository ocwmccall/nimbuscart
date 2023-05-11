import React, {useState, setData} from 'react';
import DnDTable, { rowSelection, setRowSelection} from "./Components/DnDTable.jsx";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./App.css";
//import {useLocation} from 'react-router-dom';


function App() {

  

  return (
    <DnDTable></DnDTable>
  );


  






}

export default App;




  // return (
  //   <div className="main_container">
  //     <div className="main_content">
  //       <div className="table_container" >
  //         <MaterialReactTable
  //         autoResetPageIndex={false}
  //         columns={columns}
  //         data={data}
  //         editingMode="modal"
  //         enableEditing
  //         onEditingRowSave={handleSaveRow}
  //         enableFullScreenToggle={false}
  //         enableRowOrdering
  //         enableSorting={false}
  //         enableDensityToggle={false}
  //         enableColumnFilters={false}
  //         enableColumnActions={false}
  //         enableColumnFilterModes={false}
  //         enableTopToolbar={false}
  //         enableRowSelection={true}
  //         getRowId = {(row) => row.index}
  //         onRowSelectionChange={setRowSelection}
  //         state={{ rowSelection }}      
  //         muiTableBodyRowDragHandleProps={({ table }) => ({
  //           onDragEnd: () => {
  //             const { draggingRow, hoveredRow } = table.getState();
  //             if (hoveredRow && draggingRow) {
  //               data.splice(
  //                 hoveredRow.index,
  //                 0,
  //                 data.splice(draggingRow.index, 1)[0],
  //               );
  //               setData([...data]);
  //             }
  //           },
  //         })}
  //       />
  //       </div>
  //       <div className="secondary_content" >
  //         <Stack spacing={2}>
  //           <Button variant="contained">Save and return</Button>
  //           <Button variant="contained" onClick={deleteItem}>Delete Item</Button>
  //           <Button variant="contained" >New Item</Button>
  //         </Stack>
  //       </div>
  //     </div>
  //   </div>
  // );
