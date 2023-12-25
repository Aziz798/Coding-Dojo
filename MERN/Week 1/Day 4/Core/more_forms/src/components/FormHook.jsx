import React, { useState } from 'react';

const HookForm = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const createUser = (e) => {
        e.preventDefault();
    }
    const errorHandle = (pass, conf) => {
        if (pass !== conf && pass !== "" && conf !== "") {
            return "Wrong password"
        } else if (pass === conf && pass !== "" && conf !== "") {
            return "Correct Password"
        }
        else {
            return ''
        }
    }
    const isEmailValid = ()=> {
        if (emailRegex.test(email)){
            return "Correct email "
        }
        else if (emailRegex.test(email)===false){
            return "Wrong email Structure"
        }
        else{
            return" "
        }
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <p>{errorHandle(password, confirmPassword)}</p>
                <label>First name</label>
                <input type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label >Last Name:</label>
                <input type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label >Email:</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{isEmailValid()}</p>
                <label >Password</label>
                <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label >Confirm Password</label>
                <input type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button>Submit</button>
            </form>
            <p>{firstName}</p>
            <p> {lastName} </p>
            <p> {email} </p>
            <p>{password}</p>
            <p> {confirmPassword} </p>
        </div>
    )
};

export default HookForm;
