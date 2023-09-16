"use client"

import { headers } from "../../../../next.config"

export default function UserCreate() {
    return (
        <form onSubmit={(e) =>{
        e.preventDefault();
        const userid = e.target.userid.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        const email = e.target.userid.value;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid, password, username, email})
        }
        fetch('http://localhost:3001/api/users', options)
            .then(res=> {
                if(res.status === 200) {
                    this.props.history.push('/');
                } else if(res.status === 4000) {
                    this.props.thistory.psuh('/user');
                }
            }).catch(err => console.log("err", err));
        }}>
            <input type="text" name="userid" placeholder="userid"></input>
            <input type="text" name="password" placeholder="password"></input>
            <input type="text" name="username" placeholder="username"></input>
            <input type="text" name="email" placeholder="userid"></input>
            <input type="submit" value="가입"></input>
        </form>
    )
}