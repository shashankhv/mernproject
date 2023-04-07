const { error } = require("console")
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoal = asyncHandler(async (req , res)=>{
const goals = await Goal.find()

    res.status(200).json(goals)
})


const setGoal = asyncHandler(async (req , res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please donot leave text field Empty')
    }

   const goal = await Goal.create({
        text : req.body.text,
    })

    res.status(200).json(goal)
})



const putGoal = asyncHandler(async (req , res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Error")
    }

    const updatedGoal = await Goal.findOneAndUpdate(req.params.id , req.body , {
        new : true,
    })



    res.status(200).json(updatedGoal)
})


const deleteGoal = asyncHandler(async (req , res)=>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Error")
    }
    
    await Goal.findByIdAndDelete(req.params.id)


    res.status(200).json({id : req.params.id})
})

module.exports = {
    setGoal,
    getGoal,
    putGoal,
    deleteGoal
}