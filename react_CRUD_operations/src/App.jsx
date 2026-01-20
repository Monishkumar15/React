import React from "react";
import { useState } from "react";
import "./App.css";
import {v4 as uuid} from 'uuid';

const App = () => {
  const [users, SetUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const [buttonState, setButtonState] = useState("add");

  const hanndleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addData = () => {
    SetUsers((currInfo) => [...currInfo, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  const deleteData = (id)=>{
    SetUsers((currUsers)=>{
      return currUsers.filter((user)=>{
        return user.id!==id;
      });
    });
  };
  console.log(users);
  
  const startEditing = (user)=>{
    setUserInfo(user)
    setButtonState("edit")
  }

  const cancelEditing = ()=>{
     setUserInfo({
      id: uuid(),
      name: "",
      age: "",
      email: "",
      phone: "",
    });
    setButtonState("add")
  }

  const updateData = ()=>{
    SetUsers((currUsers)=>{
      return currUsers.map((user)=>{
        if(user.id===userInfo.id){
          return userInfo;
        }
        return user;
      });
    });
    cancelEditing();
  }

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={userInfo.name}
          name="name"
          onChange={hanndleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your age"
          value={userInfo.age}
          name="age"
          onChange={hanndleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={userInfo.email}
          name="email"
          onChange={hanndleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your number"
          value={userInfo.phone}
          name="phone"
          onChange={hanndleChange}
        />
        <br />
        {buttonState ==="add" ? (<button onClick={addData}>Add</button>
      ): (<div className="buttonContainer">
          <button onClick={updateData}>Update</button>
          <button onClick={cancelEditing}>Cancel</button>
      </div>
        ) }
      </div>
      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={()=>{startEditing(user)}}>Edit</button>
                    <button onClick={()=>{deleteData(user.id)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
