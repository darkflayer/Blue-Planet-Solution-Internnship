import React, { useState } from 'react';
import { registerParticipant } from '../services/participantService';

const RegisterParticipantPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventId: '',
        team: '',
        college: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerParticipant(formData);
            alert('Participant Registered!');
        } catch (err) {
            alert('Error registering participant');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} placeholder="Name" />
            <input name="email" onChange={handleChange} placeholder="Email" />
            <input name="phone" onChange={handleChange} placeholder="Phone" />
            <input name="eventId" onChange={handleChange} placeholder="Event ID" />
            <input name="team" onChange={handleChange} placeholder="Team (optional)" />
            <input name="college" onChange={handleChange} placeholder="College" />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterParticipantPage;
