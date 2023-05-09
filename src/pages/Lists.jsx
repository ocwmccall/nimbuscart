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







// import React, { Component } from 'react';

// export default function Lists({ lists }) {

//   return (
//     <div>
//       {lists.map((listItem) => {
//         return (
//           <ListItem key={listItem.id} id={listItem.id} title={listItem.title} />
//         );
//       })}
//     </div>
//   )
// }

// class ListItem extends React.Component {
//   state = {
//     selected: false,
//   }

//   changeState = () => {
//     const { selected } = this.state;

//     this.setState({ selected: !selected })
//   }

//   render() {
//     const { id, title } = this.props;
//     const { selected } = this.state;

//     return console.log(selected, ' id - ', id, ' title - ', title) || (
//       <button
//         className={selected ? 'me' : 'notMe'}
//         onClick={() => this.changeState()}
//       >
//         {title}
//       </button>
//     )
//   }
// }


