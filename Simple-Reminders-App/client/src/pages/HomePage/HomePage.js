import React, {useState, useEffect} from 'react';
import axios from "axios";
import Reminder from "../../components/Reminder/Reminder";
import Navbar from "../../components/Navbar/Navbar";
import ReminderForm from '../../components/ReminderForm/ReminderForm';
import "./HomePage.css";

function HomePage() {
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        async function getReminders() {
            try {
                const request = {
                    method: "get",
                    url: "http://localhost:5000/api/reminders",
                    withCredentials: true
                };
                const response = await axios(request);
                setReminders(response.data.reminders.map(reminder => <Reminder key={reminder._id} 
                                                                                id={reminder._id}
                                                                                text={reminder.text} 
                                                                                updateReminders={setReminders}
                                                                                /> ));
            } catch(err) {
                console.log(err);
            }
        }

        getReminders();
    }, []);

    async function deleteAllReminders(event) {
        event.preventDefault();
        const request = {
            method: "delete",
            url: "http://localhost:5000/api/reminders",
            withCredentials: true,
            data: {}
        }
        try {
            const response = await axios(request);
            const clearedReminders = response.data.reminders;
            setReminders(clearedReminders);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='home-page'>
                <Navbar />
                <div className='header-button-container'>
                    <button className='delete-all-reminders-button' onClick={deleteAllReminders}>Clear all reminders</button>
                    <h2 className='home-header'>Remaining reminders: {reminders.length}</h2>
                </div>
                <div className='home-body-container'>
                    <ReminderForm updateReminders={setReminders} />
                    <div className='reminders-container'>{reminders}</div>
                </div>
        </div>
    )
}

export default HomePage
