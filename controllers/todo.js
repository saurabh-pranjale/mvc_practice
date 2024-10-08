const { Task } = require("../models/todo")



exports.getAll = async (req, res) => {
    try {
        const Todo = await Task.find()
        res.status(200).json(Todo)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}