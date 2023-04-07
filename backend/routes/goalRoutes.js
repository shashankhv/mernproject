const express = require("express")
const router = express.Router()
const {
    setGoal,
    getGoal,
    putGoal,
    deleteGoal

}  = require('../controllers/goalsController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(putGoal).delete(deleteGoal)

module.exports = router