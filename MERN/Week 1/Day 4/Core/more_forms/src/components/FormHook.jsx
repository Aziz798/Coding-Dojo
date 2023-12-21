import React, { useState } from 'react';

const HookForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const createUser = (e) => {
        e.preventDefault();



    }
    const errorHandle = (pass, conf) => {
        if (pass !== conf && pass!==""&& conf!=="") {
            return "Wrong password"

        } else if(pass===conf && pass!==""&& conf!==""){
            return "Correct Password"
        }
        else{
            return''
        }

    }


    return (
        <div>
            <form onSubmit={createUser}>
               <p>{errorHandle(password,confirmPassword)}</p>
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
