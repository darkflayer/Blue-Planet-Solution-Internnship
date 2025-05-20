import React, { useState, useEffect } from 'react';
import { createNotice, getNotices, deleteNotice } from '../services/noticeService';

const NoticeBoardPage = () => {
    const [notices, setNotices] = useState([]);
    const [formData, setFormData] = useState({ title: '', message: '', postedBy: '', visibility: 'Public' });

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        const response = await getNotices();
        setNotices(response.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createNotice(formData);
        fetchNotices();
        setFormData({ title: '', message: '', postedBy: '', visibility: 'Public' });
    };

    const handleDelete = async (id) => {
        await deleteNotice(id);
        fetchNotices();
    };

    return (
        <div>
            <h2>Post a Notice</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                <input name="postedBy" placeholder="Posted By" value={formData.postedBy} onChange={handleChange} required />
                <select name="visibility" value={formData.visibility} onChange={handleChange}>
                    <option value="Public">Public</option>
                    <option value="ClubMembers">Club Members</option>
                    <option value="Coordinators">Coordinators</option>
                </select>
                <button type="submit">Post Notice</button>
            </form>

            <h2>Notices</h2>
            {notices.map(notice => (
                <div key={notice._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h3>{notice.title}</h3>
                    <p>{notice.message}</p>
                    <p><strong>Posted By:</strong> {notice.postedBy}</p>
                    <p><em>Visibility: {notice.visibility}</em></p>
                    <button onClick={() => handleDelete(notice._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default NoticeBoardPage;
