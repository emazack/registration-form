import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Read() {

    const MY_TOKEN = "791c3fed1a4a35e204a631f55c5a92ec627644c2de78e6de53bd06e886fe44f8";
    const [users, setUsers] = useState({});

    useEffect(() => {
        getUser();
        console.log("get user user effect");
    }, [])



    const getUser = (event) => {
        axios.get(`https://gorest.co.in/public/v2/users`,
            {
                headers: {
                    Authorization: `Bearer ${MY_TOKEN}`
                }
            })
            .then((response) => {
                setUsers(response.data);
                console.log(users);
            })
    };

    const deleteUser = (event) => {
        console.log("delete user");
    };

    return (
        <div>
            <h1>Users</h1>
            <Link to="/create" className="">Add User</Link>
            <table className="">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Gender</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className="">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                    {user.isDeleting
                                        ? <span className="spinner"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="">
                                <div className="spinner"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="">
                                <div className="">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

