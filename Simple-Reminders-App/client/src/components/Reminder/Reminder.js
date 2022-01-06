import React, {useState} from 'react';
import axios from "axios";
import "./Reminder.css";

function Reminder(props) {
    const [reminderTextState, setReminderTextState] = useState("text");
    const [inputText, setInputText] = useState("");
    const [text, setText] = useState(props.text)

    async function deleteReminder(event) {
        event.preventDefault();
        const request = {
            method: "delete",
            url: `http://localhost:5000/api/reminders/${props.id}`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: {}
        };
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

    function changeToInputMode(event) {
        event.preventDefault();
        setReminderTextState("input");
    }

    function changeToTextMode(event) {
        event.preventDefault();
        setReminderTextState("text");
    }

    async function updateReminder(event) {
        event.preventDefault();
        const updatedReminder = {
            text: inputText
        }
        const request = {
            method: "put",
            url: `http://localhost:5000/api/reminders/${props.id}`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(updatedReminder)
        };
        try {
            const response = await axios(request);
            const {updatedReminder} = response.data;
            setText(updatedReminder.text);
            setInputText("");
            setReminderTextState("text");
        } catch (err) {
            console.log(err);
        }
    }

    function handleInputChange(event) {
        event.preventDefault();
        setInputText(event.target.value);
    }

    return (
        <div
            className='reminder-container' 
            onMouseLeave={changeToTextMode}
            onClick={changeToInputMode}
        >
            {reminderTextState === "text" 
                ? 
                    <div className='reminder-text'>{text}</div>
                : 
                    <div className='update-reminder-input-container'>
                        <input  
                            className='update-reminder-input'
                            type="text" 
                            name='text'
                            value={inputText}
                            placeholder='update reminder...'
                            onChange={handleInputChange} 
                        />
                        <button
                            className='update-reminder-button' 
                            onClick={updateReminder}
                        >
                            Update reminder
                        </button>
                    </div>  
            }
            <button className='x-button' onClick={deleteReminder}>&#10006;</button>
        </div>
    )
}

export default Reminder
