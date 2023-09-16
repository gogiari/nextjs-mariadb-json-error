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
            boyd: JSON.stringify({userid, password, username, email})
        }
        fetch('http://localhost:3001/api/users', options)
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
            })
        }}>
            <input type="text" name="userid" placeholder="userid"></input>
            <input type="text" name="password" placeholder="password"></input>
            <input type="text" name="username" placeholder="username"></input>
            <input type="text" name="email" placeholder="userid"></input>
            <input type="submit" value="가입"></input>
        </form>
    )
}