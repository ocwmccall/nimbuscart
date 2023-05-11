import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const DnDTable = (props) => {

  const [rowSelection, setRowSelection] = useState({});
  
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'itemName',
        header: 'Name',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
      },
      {
        accessorKey: 'priority',
        header: 'Priority',
      },
      {
        accessorKey: 'url',
        header: 'URL',
      }
    ],
    [],
    //end
  );

  const [data, setData] = useState([
    {
      itemName:'Graphics Card' ,
      price: '$600.00',
      quantity: '1',
      priority: '4',
      url: 'amazon.com',
    },
    {
      itemName: 'Apples',
      price: '$2.49',
      quantity: '12',
      priority: '2',
      url: 'walmart.com',
    },
    {
      itemName: 'Bottled Water',
      price: '$6.99',
      quantity: '2',
      priority: '1',
      url: 'walmart.com',
    },
    {
      itemName: 'Rice',
      price: '$8.99',
      quantity: '1',
      priority: '1',
      url: 'walmart.com',
    },
    {
      itemName: 'Television',
      price: '$399.99',
      quantity: '1',
      priority: '3',
      url: 'bestbuy.com',
    },

  ]);

  useEffect(() => {
    
    console.log(Object.keys(rowSelection))
  }, [rowSelection]);

  
  const deleteItem = () => {
    console.log(Object.keys(rowSelection))
    Object.keys(rowSelection).reverse().forEach((element) => {
      data.splice(parseInt(element), 1)
      console.log(data)
    })
    setData([...data])
    setRowSelection({})
   
  }

  const newItem = () => {
    const newObject = {
      itemName: 'New Item',
      price: '$0.00',
      quantity: '0',
      priority: '0',
      url: '',
    }

    
    setData([...data, newObject])
  }


  
  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    data[row.index] = values;
    setData([...data]);
    exitEditingMode(); //required to exit editing mode

  };


  return (
    <div className="main_container">
      <div className="main_content">
        <div className="table_container" >
          <MaterialReactTable
          autoResetPageIndex={false}
          columns={columns}
          data={data}
          editingMode="modal"
          enableEditing
          onEditingRowSave={handleSaveRow}
          enableFullScreenToggle={false}
          enableRowOrdering
          enableSorting={true}
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
        </div>
        <div className="secondary_content" >
          <Stack spacing={2}>
            <Button variant="contained">Save and return</Button>
            <Button variant="contained" onClick={deleteItem}>Delete Item</Button>
            <Button variant="contained" onClick={newItem}>New Item</Button>
          </Stack>
        </div>
      </div>
    </div>
  );




 };

export default DnDTable;





    // {
    //   firstName: 'Dylan',
    //   lastName: 'Murray',
    //   city: 'East Daphne',
    // },
    // {
    //   firstName: 'Raquel',
    //   lastName: 'Kohler',
    //   city: 'Columbus',
    // },
    // {
    //   firstName: 'Ervin',
    //   lastName: 'Reinger',
    //   city: 'South Linda',
    // },
    // {
    //   firstName: 'Brittany',
    //   lastName: 'McCullough',
    //   city: 'Lincoln',
    // },
    // {
    //   firstName: 'Branson',
    //   lastName: 'Frami',
    //   city: 'Charleston',
    // },


 // return (
  //   <MaterialReactTable
  //     autoResetPageIndex={false}
  //     columns={columns}
  //     data={data}
  //     editingMode="modal"
  //     enableEditing
  //     onEditingRowSave={handleSaveRow}
  //     enableFullScreenToggle={false}
  //     enableRowOrdering
  //     enableSorting={false}
  //     enableDensityToggle={false}
  //     enableColumnFilters={false}
  //     enableColumnActions={false}
  //     enableColumnFilterModes={false}
  //     enableTopToolbar={false}
  //     enableRowSelection={true}
  //     getRowId = {(row) => row.index}
  //     onRowSelectionChange={setRowSelection}
  //     state={{ rowSelection }}      
  //     muiTableBodyRowDragHandleProps={({ table }) => ({
  //       onDragEnd: () => {
  //         const { draggingRow, hoveredRow } = table.getState();
  //         if (hoveredRow && draggingRow) {
  //           data.splice(
  //             hoveredRow.index,
  //             0,
  //             data.splice(draggingRow.index, 1)[0],
  //           );
  //           setData([...data]);
  //         }
  //       },
  //     })}
  //   />
  // );

