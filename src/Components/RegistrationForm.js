import React from 'react';
import "./style.css";
import { useState } from "react";
import { database } from '../Firebase'
import { ref, push, child, update } from "firebase/database";
import "./Responsive.css"

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [mobileNo, setMobileNo] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstname") {
            setFirstName(value);
        }
        if (id === "lastname") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "mobile") {
            setMobileNo(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmpassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        let obj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNo: mobileNo,
            password: password,
            confirmPassword: confirmPassword
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj;
        return update(ref(database), updates);
    }

    return (
        <div className='form'>
            <div className="form-body-footer">
                <h2 className='welcome'>Welcome!</h2>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="firstname">First Name :</label>
                    <input type="text" className='formInput text-dark' id='firstname' placeholder='khizer' value={firstName === null ? "" : firstName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="lastname">Last Name :</label>
                    <input type="text" className='formInput text-dark' id='lastname' placeholder='hussain' value={lastName} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="mobile">Mobile No :</label>
                    <input type="text" className='formInput text-dark' id='mobile' placeholder='xxxxxxxxxxx' value={mobileNo} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="email">Email :</label>
                    <input type="text" className='formInput text-dark' id='email' placeholder='example@gmail.com' value={email} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="password">Password :</label>
                    <input type="text" className='formInput text-dark' id='password' placeholder='password' value={password} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="inputclass">
                    <label className='formLabel' htmlFor="confirmpassword">Confirm Password :</label>
                    <input type="text" className='formInput text-dark' id='confirmpassword' placeholder='confirm password' value={confirmPassword} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="footer">
                    <input type="button" className='btn text-white' value="Register" onClick={() => handleSubmit()} />
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;
