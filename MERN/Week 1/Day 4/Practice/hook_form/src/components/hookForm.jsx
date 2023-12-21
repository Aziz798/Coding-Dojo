import React, { useState } from 'react';

const HookForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    });
    const [submittedUsers, setSubmittedUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const createUser = (e) => {
        e.preventDefault();
        setSubmittedUsers((prevUsers) => [...prevUsers, user]);
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                            <hr />
                        </div>
                <div>
                    <h2>Submitted Users:</h2>
                    {submittedUsers.map((submittedUser, index) => (
                        <div key={index}>
                            <p>First Name: {submittedUser.firstName}</p>
                            <p>Last Name: {submittedUser.lastName}</p>
                            <p>Email: {submittedUser.email}</p>
                            <p>Password: {submittedUser.password}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default HookForm;
