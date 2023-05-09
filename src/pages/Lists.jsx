import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Lists({ lists }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (evt, id) => {
    setSelectedIndex(id);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="list of lists">
      {lists.map((listItem) => {
      return (<ListItemButton selected={selectedIndex === listItem.id} onClick={(evt) => handleListItemClick(evt, listItem.id)}>
                <ListItemText primary={listItem.title} />
              </ListItemButton>)
      })}
      </List>
    </Box>
  );
}






// import React from "react"

// export default function Lists({ lists }) {

//   // console.log("We are in Lists.jsx: lists=", lists)

//   const handleClick = async (id) => {
//     // this should somehow highlight the selected list, and set some state in MyLists so that when the user
//     // clicks 'Edit List' the button knows which list was selected for editing...
//     console.log(id)
//   }

//   return (
//     <div className="book-list">
//       <ul>
//         {lists.map(list => (
//           <li key={list.id} onClick={() => handleClick(list.id)}>{list.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
