const { error } = require("console")

const getGoal = (req , res)=>{
    res.status(200).json({message : "Get goals"})
}


const setGoal = (req , res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please donot leave text field Empty')
    }

    res.status(200).json({message : "Set goals"})
}



const putGoal = (req , res)=>{
    res.status(200).json({message : `Update ${req.params.id} goals`})
}


const deleteGoal = (req , res)=>{
    res.status(200).json({message : `Delete ${req.params.id} goals`})
}

module.exports = {
    setGoal,
    getGoal,
    putGoal,
    deleteGoal
}