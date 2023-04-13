import React, { useState, useEffect } from 'react'

export default function MyLists() {

  return (

    <div>
        <p>Previous saved lists</p>
        <div>
            <div>Lists</div>
            <div>
                <button>New List</button>
                <button>Edit List</button>
                <button>Delete List</button>
            </div>
        </div>
    </div>

  )
}
