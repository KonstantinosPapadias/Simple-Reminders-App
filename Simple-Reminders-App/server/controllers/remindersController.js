const User = require("../models/User");

async function getReminders(req, res, next) {
    try {
        res.send({reminders: req.user.reminders});
    } catch (err) {
        next(err);
    }
}

async function getReminder(req, res, next) {
    try {
        const {reminderId} = req.params;
        const reminder = req.user.reminders.find(reminder => reminder.id === reminderId);
        res.send({reminder: reminder});
    } catch (err) {
        next(err);
    }
}

async function postReminder(req, res, next) {
    try {
        const {text} = req.body;
        const newReminder = {text: text};
        req.user.reminders.push(newReminder);
        await req.user.save();
        const savedReminder = req.user.reminders[req.user.reminders.length - 1];
        res.send({reminder: savedReminder});
    } catch (err) {
        next(err);
    }
}

async function updateReminder(req, res, next) {
    try {
        const {reminderId} = req.params;
        const {text} = req.body; 
        const reminderToUpdatePos = req.user.reminders.findIndex(reminder => reminder.id === reminderId);
        req.user.reminders[reminderToUpdatePos].text = text;
        await req.user.save();
        res.send({updatedReminder: req.user.reminders[reminderToUpdatePos]})
    } catch (err) {
        next(err);
    }
}

async function deleteAllReminders(req, res, next) {
    try {
        req.user.reminders = [];
        await req.user.save();
        res.send({reminders: req.user.reminders});
    } catch (err) {
        next(err);
    }
}

async function deleteReminder(req, res, next) {
    try {
        const {reminderId} = req.params;
        req.user.reminders = req.user.reminders.filter(reminder => reminder.id !== reminderId);
        await req.user.save();
        res.send({reminderId: reminderId});
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getReminders,
    getReminder,
    postReminder,
    updateReminder,
    deleteAllReminders,
    deleteReminder
};