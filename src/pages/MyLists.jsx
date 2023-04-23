import React, { useState, useEffect } from 'react';

import {db} from '../firebase'
import { collection, getDocs, setDoc, deleteDoc, updateDoc, deleteField, query, where } from 'firebase/firestore';
import Lists from './Lists';

export default function MyLists({user}) {
  const [lists, setLists] = useState(null);

  // console.log("USER: ", user.uid)

  const getListIndex = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user.uid), where("title", "==", "__ListIndex"))

    await getDocs(q).then((snapshot) => {
      let results = []

      snapshot.docs.forEach(doc => {
        let data = doc.data("lists").lists
        for (const key in data) {
          results.push({id: data[key], title: key})
        }
      })

      setLists(results)
    }).catch((err) => console.log(err))
  }

  useEffect( () => {
    getListIndex()
  }, [])
  
  return (

    <div>
        <p>Previous saved lists</p>
        <div>
            <h2>Lists</h2>
            { 
             lists && <Lists lists={lists}/>
            }
            <div>
                <button>New List</button>
                <button>Edit List</button>
                <button>Delete List</button>
            </div>
        </div>
    </div>

  )
}
