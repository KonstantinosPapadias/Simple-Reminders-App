import React, {useState, useEffect} from 'react';
import axios from "axios";
import Reminder from "../Reminder/Reminder";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import ReminderForm from '../ReminderForm/ReminderForm';

function Home() {
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

    return (
        <div className='home-container'>
                <Navbar />
                <div className='home-body-container'>
                    <ReminderForm updateReminders={setReminders} />
                    <div className='reminders-container'>{reminders}</div>
                </div>
        </div>
    )
}

export default Home
