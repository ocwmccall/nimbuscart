import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import DataContext from '../context/DataContext.js';

const DnDTable = () => {

  //const [rowSelection, setRowSelection] = useState({});
  const {rowSelection, setRowSelection} = useState(DataContext)
  
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
    ],
    [],
    //end
  );

  // const [data, setData] = useState([
  //   {
  //     firstName: 'Dylan',
  //     lastName: 'Murray',
  //     city: 'East Daphne',
  //   },
  //   {
  //     firstName: 'Raquel',
  //     lastName: 'Kohler',
  //     city: 'Columbus',
  //   },
  //   {
  //     firstName: 'Ervin',
  //     lastName: 'Reinger',
  //     city: 'South Linda',
  //   },
  //   {
  //     firstName: 'Brittany',
  //     lastName: 'McCullough',
  //     city: 'Lincoln',
  //   },
  //   {
  //     firstName: 'Branson',
  //     lastName: 'Frami',
  //     city: 'Charleston',
  //   },
  // ]);

  useEffect(() => {   
    console.log(Object.keys(rowSelection))
  }, [rowSelection]);



  return (
    <MaterialReactTable
      autoResetPageIndex={false}
      columns={columns}
      data={data}
      editingMode="modal"
      enableEditing
      enableFullScreenToggle={false}
      enableRowOrdering
      enableSorting={false}
      enableDensityToggle={false}
      enableColumnFilters={false}
      enableColumnActions={false}
      enableColumnFilterModes={false}
      enableTopToolbar={false}
      enableRowSelection={true}
      getRowId = {(row) => row.index}
      onRowSelectionChange={setRowSelection}
      state={{ rowSelection }}      
      muiTableBodyRowDragHandleProps={({ table }) => ({
        onDragEnd: () => {
          const { draggingRow, hoveredRow } = table.getState();
          if (hoveredRow && draggingRow) {
            data.splice(
              hoveredRow.index,
              0,
              data.splice(draggingRow.index, 1)[0],
            );
            setData([...data]);
          }
        },
      })}
    />
  );
};

export default DnDTable;
