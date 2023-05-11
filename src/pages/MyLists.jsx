import React, { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import Lists from "./Lists";
import styled from "styled-components";
import { color, fontFamily, padding, width } from "@mui/system";
import { auto } from "@popperjs/core";
import { dark } from "@mui/material/styles/createPalette";
function MyLists({ user }) {
  const [lists, setLists] = useState(null);
  const [name, setName] = useState("");
  const { selectedId } = useContext(DataContext);
  const getListIndex = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", user.uid),
      where("title", "==", "__ListIndex")
    );
    await getDocs(q)
      .then((snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          let data = doc.data("lists").lists;
          for (const key in data) {
            results.push({ id: data[key], title: key });
          }
        });
        setLists(results);
      })
      .catch((err) => console.log(err));
  };
  const handleNewList = async (e) => {
    e.preventDefault();
    const newTitle = name.trim();
    if (
      newTitle === "" ||
      newTitle === "__ListIndex" ||
      lists.includes((item) => item.title === newTitle)
    )
      return;
    const docRef = await addDoc(collection(db, "users"), {
      title: newTitle,
      uid: user.uid,
      items: [],
    });
    setLists((oldLists) => [...oldLists, { id: docRef.id, title: newTitle }]);
  };
  const handleDeleteList = async (e) => {
    let updatedLists = lists.filter((elem) => elem.id !== selectedId);
    setLists(updatedLists);
    await deleteDoc(doc(db, "users", selectedId));
  };
  const handleEditList = (e) => {
    const docRef = doc(db, "users", selectedId);
    // do stuff
  };
  useEffect(() => {
    getListIndex();
  }, []);
  return (
    <Styling>
      <div className="container">
        <div className="lists">
          {/* <h2> Saved lists</h2> */}
          <div>
            <h1>My Lists</h1>
            {lists && <Lists lists={lists} />}
          </div>
        </div>

        <div className="first-list-operation">
          <div>
            <div className="buttons">
              <button onClick={handleEditList}>Edit List</button>
              <button onClick={handleDeleteList}>Delete List</button>
            </div>
          </div>
        </div>

        <div className="second-list-operations">
          <form onSubmit={handleNewList}>
            <label>
              <span>New List Name: </span>
              <input
                required
                type="string"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <button className="btn">Add List</button>
          </form>
        </div>
      </div>
    </Styling>
  );
}

const Styling = styled.div`
  background: rgba(24, 138, 178, 0.2);

  .container {
    width: 600px;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    text-align: center;
    align-items: center;
  }

  .lists {
    width: 100%;
    // border: 2px solid blue;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 50px;
    padding-bottom: 1rem;
  }

  .btn {
    width: 200px;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    background-color: #ffd166;
    color: #fff;
    border: none;
  }

  .btn:hover {
    background: #ef476f;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .buttons {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
  }

  .buttons button {
    width: 200px;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    background-color: #ffd166;
    color: #fff;
    border: none;
  }

  .buttons button:hover {
    background: #ef476f;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  // .second-list-operations{
  //   width: 100%;
  //   // border: 2px solid red;
  // }

  // form {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   width: 100%;
  // }

  // form fieldset {
  //   border: none;
  //   margin: 0;
  //   padding: 0;
  //   width: 400px;
  // }

  // .form-label {
  //   display: block;
  //   margin-bottom: 0.5rem;
  //   font-size: 1.2rem;
  //   font-weight: bold;
  //   letter-spacing: .5px;
  // }
  // .form-input:hover{
  //   border-bottom: 2px solid #EF476F;
  // }
  // #login {
  //   margin-left: 1rem;
  //   margin-right: 1rem;
  // }

  // .form-input{
  //   width: 100%;
  //   padding: 5px 10px;
  //   border-bottom: 1px solid #3D3935;
  //   border-radius: 4px;
  //   background-color: #fff;
  //   color: #3D3935;
  //   outline: 0;
  //   transition: all 0.5s linear;
  // }
  MuiListItemText-root:nth-child(odd) {
    background: rgba(24, 138, 178, 0.2);
    margin: 0.5;
    align-items: center;
    justify-content: center;
  }
  // .MuiListItemText-root:nth-child(odd):hover{
  //   background-color: rgba()
  // }
`;
export default MyLists;
