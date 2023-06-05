import React from 'react'

import { useEffect,useState } from 'react';
import axios from 'axios'


function UserList() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
      setData(response.data)
      console.log(response)
    })
  },[])
  return (
    <div>
        <h1>contact list</h1>
        {data.map((e)=>(<div>nameis:{e.name}</div>))}

    </div>
  );
}

export default UserList;