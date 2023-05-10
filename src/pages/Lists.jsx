import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DataContext from '../context/DataContext';

export default function Lists({ lists }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const {selectedId, setSelectedId} = useContext(DataContext)

  const handleListItemClick = (evt, id) => {
    setSelectedIndex(id);
    setSelectedId(id);
  };

  return ( 
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="list of lists">
      {lists.map((listItem) => {
      return (<ListItemButton  selected={selectedIndex === listItem.id} onClick={(evt) => handleListItemClick(evt, listItem.id)}>
                <ListItemText className="list" primary={listItem.title} />
              </ListItemButton>)
      })}
      </List>
    </Box>
  );
}

