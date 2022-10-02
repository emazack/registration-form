import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Show(props) {

    const [users, setUsers] = useState(false);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const resp = await axios.get(`https://gorest.co.in/public/v2/users`,
            {
                headers: {
                    Authorization: `Bearer ${props.MY_TOKEN}`
                }
            })
            .catch((error) => {
                if (error.response) {
                    props.handleDataError(error.response.data);
                } else if (error.request) {
                    props.setError('no response was received by server. Try later')
                } else {
                    props.setError('something went wrong')
                }
                console.log(error.config);
            });
        setUsers(resp.data);
    };

    const setLocalUserData = (data) => {
        let { id, name, email, gender } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);
    }

    const deleteUser = (id) => {
        let userIsDeleting = users.map(user => {
            if (user.id === id) {
                user.isDeleting = true;
            }
            return user;
        })
        setUsers(userIsDeleting);
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${props.MY_TOKEN}`
                }
            })
            .then(() => {
                setUsers(users => users.filter(user => user.id !== id));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    };

    return (
        <div className='show-users-page'>
            {!users &&
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            }
            {users &&
                <div className='show-users-container'>
                    <h1>Users</h1>
                    <Link to="/add" className="btn btn-sm btn-success mb-2">Add User</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th style={{ width: '30%' }}>Name</th>
                                <th style={{ width: '30%' }}>Email</th>
                                <th style={{ width: '30%' }}>Gender</th>
                                <th style={{ width: '10%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 && users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td className='show-button-container'>
                                        <Link to="/update" className="btn btn-sm btn-primary mr-1" onClick={() => setLocalUserData(user)}>Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                            {user.isDeleting
                                                ? <span className="spinner-border spinner-border-sm text-warning"></span>
                                                : <span>Delete</span>
                                            }
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {!users.length &&
                                <tr>
                                    <td colSpan="4" className="">
                                        <div className="">No Users To Display</div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

