import React, { useMemo, useState, useEffect, useContext } from 'react';
import MaterialReactTable from 'material-react-table';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DataContext from '../context/DataContext';
import { db } from '../firebase'
import { updateDoc, doc } from 'firebase/firestore';

import { useNavigate } from "react-router";

export default function Table({ items }) {
  const navigate = useNavigate();
  const { selectedId } = useContext(DataContext);
  const [rowSelection, setRowSelection] = useState({});
  const [data, setData] = useState(items);

  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'link',
        header: 'URL',
      },
      {
        accessorKey: 'qty',
        header: 'Quantity',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },

    ],
    [],
    //end
  );

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
      name: 'New Item',
      price: '$0.00',
      qty: '0',
      // priority: '0',
      link: '',
    }
    setData([...data, newObject])
  }

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    data[row.index] = values;
    setData([...data]);
    exitEditingMode(); //required to exit editing mode
  };

  const handleClose = () => {
    const docRef = doc(db, "users", selectedId);
    updateDoc(docRef, {items: data }).then(docRef => navigate("/mylists"));
  }

  useEffect(() => {
    console.log(Object.keys(rowSelection))
  }, [rowSelection]);

  return (
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
          getRowId={(row) => row.index}
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
          <Button variant="contained" onClick={handleClose}>Save and return</Button>
          <Button variant="contained" onClick={deleteItem}>Delete Item</Button>
          <Button variant="contained" onClick={newItem}>New Item</Button>
        </Stack>
      </div>
    </div>
  );
};

