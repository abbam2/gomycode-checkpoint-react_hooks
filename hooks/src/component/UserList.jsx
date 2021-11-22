import React from 'react';
import User from './User';





const Userlist = (props) => {
    
    
        return (
            <div className="main">
                {props.users.map(user => <User name={user.name} link={user.link} job={user.job} delUser={props.delUser} userId={user.id} key={user.id}/>)}

            </div>
        );
    
}

export default Userlist;
