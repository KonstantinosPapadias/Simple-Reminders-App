import React, {useState} from 'react';
import axios from "axios";
import "./Reminder.css";

function Reminder(props) {
    const [reminderTextState, setTeminderTextState] = useState("text");
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
        setTeminderTextState("input");
    }

    function changeToTextMode(event) {
        event.preventDefault();
        setTeminderTextState("text");
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
            const {updateReminder} = response.data;
            setText(updatedReminder.text);
        } catch (err) {
            console.log(err);
        }
    }

    function handleInputChange(event) {
        event.preventDefault();
        setInputText(event.target.value);
    }

    return (
        <div onMouseLeave={changeToTextMode} className='reminder-container'>
            {reminderTextState === "text"
                ? <h3 onClick={changeToInputMode}>{text}</h3>
                : <div>
                    <input onChange={handleInputChange} type="text" name='text' placeholder='update reminder...' />
                    <button onClick={updateReminder}>Update reminder</button>
                </div>  
            }
            <button className='x-button' onClick={deleteReminder}>&#10006;</button>
        </div>
    )
}

export default Reminder
