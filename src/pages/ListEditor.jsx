import React, {useState, setData} from 'react';
import DnDTable, { rowSelection, setRowSelection} from "../components/DnDTable.jsx";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../styles/list.css";

export default function ListEditor() {


  const deleteItem = () => {
    console.log(Object.keys(rowSelection))
    Object.keys(rowSelection).reverse().forEach((element) => {
      data.splice(parseInt(element), 1)
      console.log(data)
    })
    console.log(data)
    //setData(data)
   
  }

  const [data, setData] = useState([
    {
      firstName: 'Dylan',
      lastName: 'Murray',
      city: 'East Daphne',
    },
    {
      firstName: 'Raquel',
      lastName: 'Kohler',
      city: 'Columbus',
    },
    {
      firstName: 'Ervin',
      lastName: 'Reinger',
      city: 'South Linda',
    },
    {
      firstName: 'Brittany',
      lastName: 'McCullough',
      city: 'Lincoln',
    },
    {
      firstName: 'Branson',
      lastName: 'Frami',
      city: 'Charleston',
    },
  ]);




  return (
    <div className="main_container">
      <div className="main_content">
        <div className="table_container" ><DnDTable data={data} rowSelection={rowSelection}></DnDTable></div>
        <div className="secondary_content" >
          <Stack spacing={2}>
            <Button variant="contained">Save and return</Button>
            <Button variant="contained" onClick={deleteItem}>Delete Item</Button>
            <Button variant="contained" >New Item</Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}
