import React, { useState, useEffect } from 'react';

import { db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc, deleteField, query, where } from 'firebase/firestore';
import Lists from './Lists';

export default function MyLists({ user }) {
  const [lists, setLists] = useState(null);
  const [name, setName] = useState("");

  // console.log("USER: ", user.uid)

  const getListIndex = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user.uid), where("title", "==", "__ListIndex"))

    await getDocs(q).then((snapshot) => {
      let results = []

      snapshot.docs.forEach(doc => {
        let data = doc.data("lists").lists
        for (const key in data) {
          results.push({ id: data[key], title: key })
        }
      })

      setLists(results)
    }).catch((err) => console.log(err))
  }

  const handleNewList = async (e) => {
    e.preventDefault();

    const newTitle = name.trim();
    if (newTitle === "" || newTitle === "__ListIndex" || lists.includes(item => item.title === newTitle)) return;

    const docRef = await addDoc(collection(db, "users"), {
      title: newTitle,
      uid: user.uid,
      items: []
    });
    setLists(oldLists => [...oldLists, {id: docRef.id, title: newTitle}]);
  };

  useEffect(() => {
    getListIndex()
  }, [])

  return (
    <div>
      <p>Previous saved lists</p>
      <div>
        <h1>Lists</h1>
        {
          lists && <Lists lists={lists} />
        }
        <div>
          <form onSubmit={handleNewList}>
            <label>
              <span>New List Name:</span>
              <input
                required
                type="string"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <button className='btn'>New List</button>
          </form>
          <button>Edit List</button>
          <button>Delete List</button>
        </div>
      </div>
    </div>
  )
}
