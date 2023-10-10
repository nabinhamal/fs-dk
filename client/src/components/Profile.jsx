import React, { useState } from 'react';
import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import { Avatar } from '../assets'; // Import the avatar image
import Header from './Header';

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = () => {
    if (user && newPassword.trim() !== '') {
      updatePassword(user, newPassword)
        .then(() => {
          setSuccessMessage('Password updated successfully!');
        })
        .catch((error) => {
          setErrorMessage('Error updating password: ' + error.message);
        });
    } else {
      setErrorMessage('Please enter a new password.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <Header/>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <img
          src={user && user.photoURL ? user.photoURL : Avatar} // Use the profile picture if available, otherwise use the avatar image
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover mx-auto"
        />
        <p className="text-center">{user ? user.email : 'Loading...'}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Change Password</h3>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="New Password"
        />
      </div>
      <button
        onClick={handleChangePassword}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Update Password
      </button>
      {successMessage && <div className="text-green-600 mb-2">{successMessage}</div>}
      {errorMessage && <div className="text-red-600 mb-2">{errorMessage}</div>}

    </div>
  );
};

export default Profile;
