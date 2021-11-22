import React from 'react';

const User = (props) => {
    
    return (


        
        <div className="userList">
            <div className="imageUser"><img src="loic.png" alt="" width="80px" height="80px" /></div>
            <div className="textUser"><h3>{props.name}</h3><h4>Developpeur JS</h4></div>
            <div className="delUser" onClick={()=>props.delUser(props.userId)}><i className="fas fa-trash"  style={{ color: "red" }}></i></div>

        </div>
    );
}

export default User;
