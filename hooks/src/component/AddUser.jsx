import React, { useState } from 'react';

const Adduser = (props) => {

/*state={
    name: " ",

}*/

const [name, setName] = useState("");

   const handleChange = (a) => {
        setName(a.target.value)
    }

   const handleClick = () =>{
        props.addUser({name})
        setName("");
    }
    
        return (
            <div className="header">
                <h2>Ajouter un utilisateur: <label htmlFor="">{name}</label> </h2>
                <h3>Ajouter en live des utilisateurs</h3>
                <input type="text" value={name} onChange={handleChange} /><button onClick={handleClick}><i className="fas fa-plus-circle"></i></button>
            </div>
        );
    
}


export default Adduser;
