import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebaar from '../components/Dashboard/Sidebaar';
import Main from '../components/Dashboard/Main';
import axios from 'axios';
import { useEffect,useState } from 'react';

const DashBoard = () => {
  const [user2, setUser]=useState({
    "UID": "eEkwCozGIgV5e3",
    "firstName": "Ja",
    "surname": "So",
    "email": "soni",
    "password": "983",
})
  const token = localStorage.getItem("token");
  useEffect(()=>{
    (async()=>{
      let response;
      response=await axios.post('http://localhost:7001/api/auth/authenticate', {
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data.uidd)
      const requestBody={
        uid: `${response.data.uidd}`
      }
      const response2=await axios.post('http://localhost:7001/api/user/getUser',requestBody)
      setUser({...response2.data});
      // console.log("user2:"+user2.firstName);
    })()
  },[token])
  const [clicket,setClicket]=useState(1);
  return (
    <>
    <div className='flex flex-col'>
    <div className=' h-24'>
      <Navbar user={user2}/>
    </div>
    <div className=' flex'>
      <div className=' w-96'>
        <Sidebaar user={user2} setClicked={setClicket}/>
      </div>
      <div className=' my-8 flex flex-1'>
      <Main user={user2} clicked={clicket}/>
      </div>
      </div>
    </div>
    </>
  );
}

export default DashBoard;

