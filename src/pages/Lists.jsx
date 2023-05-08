import React from "react"

export default function Lists({ lists }) {

  // console.log("We are in Lists.jsx: lists=", lists)

  const handleClick = async (id) => {
    // this should somehow highlight the selected list, and set some state in MyLists so that when the user
    // clicks 'Edit List' the button knows which list was selected for editing...
    console.log(id)
  }

  return (
    <div className="book-list">
      <ul>
        {lists.map(list => (
          <li key={list.id} onClick={() => handleClick(list.id)}>{list.title}</li>
        ))}
      </ul>
    </div>
  )
}
