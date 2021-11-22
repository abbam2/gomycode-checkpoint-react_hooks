import React, { useState } from 'react';
import './App.css';
import Adduser from './component/AddUser';
import Userlist from './component/UserList';



const App = () => {

  /*state = {
    users: [
     {
       id: 1,
        name: "Abba Marc",
        link: "isaac.jpg",
        job: "Dev Fullsatck JS"
      },
      //{
      //id: 2,
        //name: "Loic Fian",
        //link: "loic.jpg",
        //job: "Dev Fullsatck JS"}
      
    ]

  }*/


  const [users, setUsers] = useState([
    {
      id: 1,
       name: "Abba Marc",
       link: "isaac.jpg",
       job: "Dev Fullsatck JS"
     }
    ]);

  const handleAdd = (user) => 
  { 
    let newUsers = [...users];//copie du tableau
    newUsers.push(user);

    setUsers(newUsers);
  }



  const handleDel = (id) => 
  {

    let array = [...users]; // make a separate copy of the array
    
  
    let index = array.findIndex(user =>user.id===id);
    

    
      array.splice(index, 1);
      setUsers(array);
    
  }
  

  
    return (
      <div className="App">
        <Adduser addUser={handleAdd}  />
        <Userlist users={users} delUser={handleDel} />

      </div>
    );
 
}

export default App
