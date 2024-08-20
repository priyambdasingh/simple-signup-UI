import React, { useState } from 'react';
import './SignupForm.css';
import { saveUserSignupData } from './actions/user';

export const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [address, setAddress] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Family Members:', familyMembers);
    console.log('Address:', address);
    console.log('Food Preference:', foodPreference);
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    console.log('Role:', role);
   
    //api call 

    const userFormData = {
        name,email,password,familyMembers,address,foodPreference,latitude
        ,longitude,role
    }
    saveUserSignupData(userFormData);
    setSubmitted(true);
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Family Members:
          <input
            type="number"
            value={familyMembers}
            onChange={(e) => setFamilyMembers(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Food Preference:
          <input
            type="text"
            value={foodPreference}
            onChange={(e) => setFoodPreference(e.target.value)}
            required
          />
        </label>
        <label>
          Latitude:
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </label>
        <label>
          Longitude:
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {submitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default SignupForm;
