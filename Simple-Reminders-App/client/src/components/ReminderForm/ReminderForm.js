import React, {useState} from 'react';
import axios from "axios";
import "./ReminderForm.css";
import Reminder from '../Reminder/Reminder';

function ReminderForm(props) {
    const [text, setText] = useState("");

    function handleTextChange(event) {
        event.preventDefault();
        setText(event.target.value);
    }

    async function handleButtonClick(event) {
        event.preventDefault();
        const newReminder = {
            text: text
        };
        const request = {
            method: "post",
            url: "http://localhost:5000/api/reminders",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(newReminder)
        };
        try {
            const response = await axios(request);
            let savedReminder = response.data.reminder;
            savedReminder = <Reminder key={savedReminder._id}
                                        id={savedReminder._id}
                                        text={savedReminder.text}
                                        updateReminders={props.updateReminders}
                            />;
            props.updateReminders(reminders => [...reminders, savedReminder]);
            setText("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='reminder-form-container'>
            <div className='reminder-form-input-container'>
                <input className='reminder-form-input' type="text" name="text" value={text} placeholder='Enter new reminder...' onChange={handleTextChange} />
            </div>
            <button className='create-reminder-button' onClick={handleButtonClick}>Create new reminder</button> 
        </div>
    )
}

export default ReminderForm
