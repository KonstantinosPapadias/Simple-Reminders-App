import React, {useState} from 'react';
import axios from "axios";
import "./Reminder.css";

function Reminder(props) {

    async function deleteReminder() {
        const request = {
            method: "delete",
            url: `http://localhost:5000/api/reminders/${props.id}`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        }
        try {
            const response = await axios(request);
            props.updateReminders(reminders => {
                const filteredReminders = reminders.filter(reminder => reminder.props.id !== props.id);
                return filteredReminders;
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='reminder-container'>
            <div className='button-container'>
                <button className='x-button' onClick={deleteReminder}>&#10006;</button>
            </div>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Reminder
