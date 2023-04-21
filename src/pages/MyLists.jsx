import React, { useState, useEffect } from 'react';


import { auth } from "../firebase"
import {db} from '../firebase'
import { collection, getDocs, setDoc, deleteDoc, updateDoc, deleteField, query, where } from 'firebase/firestore';
import Lists from './Lists';

export default function MyLists({user}) {

  console.log("USERRRRRRRR: ", user.uid)

  const [lists, setLists] = useState(null);

  const buildList = async () => {
    var user = auth.currentUser;


    const ref = await collection(db, "Lists")//.where("uid", "==", user.uid).get()
    // const ref = db.collectionGroup("Lists").where("published", "==", true).get()
    const q = query(ref, where("uid", "==", user.uid))

    await getDocs(q)
    .then((snapshot) => {
        let results = [];

        console.log(snapshot)

        snapshot.docs.forEach(doc => {
          console.log("DOC: ", doc)
          results.push({id: doc.id, ...doc.data()})
          // console.log(results)
          setLists(results)
        })
    
        // console.log("LISTS: ",lists)
      }).catch((err) => console.log(err))
  };

  useEffect( () => {
    buildList();
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
