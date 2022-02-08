const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add text field')
  }
  const goal = await Goal.create({
    text: req.body.text,
  })
  res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params
  const goal = await Goal.findById(id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params
  const goal = await Goal.findById(id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  await goal.remove()
  res.status(200).json({ id: id })
})


module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
