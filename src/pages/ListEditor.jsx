import React, { useState, useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { db } from '../firebase'
import { getDoc, doc } from 'firebase/firestore';

import Table from '../components/Table';
import styled from 'styled-components';

const ListEditor = () => {
  const [oldDoc, setOldDoc] = useState([]);
  const { selectedId } = useContext(DataContext);

  const getList = async () => {
    const docRef = doc(db, "users", selectedId);

    await getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setOldDoc(docSnap.data());
      }
    });
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Styling>
      <div className='table-container'>
        <h2>{oldDoc.title}</h2>
        {
          oldDoc.items && <Table items={ oldDoc.items } />
        }
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  display: flex;
  flex-direction: column;

  .lists{
    width: 100%;
    border: 2px solid red;
  }


  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  form fieldset {
    border: none;
    margin: 0;
    padding: 0;
    width: 400px;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: .5px;
  }
  
  .form-input:hover{
    border-bottom: 2px solid #ef476f;
  }
  
  #login {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .buttons {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .7rem;
    font-weight: bold;
  }
  
  .buttons button {
    width: 200px;
    margin-top: 0.5rem;
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
    transition: all 0.3s ease-in-out
  }
  .form-input{
    width: 100%;
    padding: 5px 10px;
    border-bottom: 1px solid #3d3935;
    border-radius: 4px;
    background-color: #fff;
    color: #3d3935;
    outline: 0;
    transition: all 0.5s linear;
  }

  MuiListItemText-root:nth-child(odd){
    background: rgba(24, 138, 178, .2);
  }

  .MuiListItemText-root:nth-child(odd):hover{
    background-color: rgba()
  }
`
export default ListEditor;

