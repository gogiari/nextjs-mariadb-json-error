import Link from "next/link";

export default async function UserList() {
    const resp = await fetch('http://localhost:3001/api/users');
    const users = await resp.json();
    return(
        <>
        <h2>hoho</h2>
        <table>
            <tr>{users.map((user)=>{
                return (
                    <>
                    <td>{user.userid}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.indate}</td>
                    </>
                )
            })}</tr>
            <a href="/user/create">Create</a>
        </table>
        </>
    )
}