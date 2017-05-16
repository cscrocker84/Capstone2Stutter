'use strict'

const {Router} = require('express')
const router = Router()

const {getMeetups, addMeetup, deleteMeetup, updateMeetup} = require('../controllers/meetupCtrl')

router.get('/meetups', getMeetups)
router.post('/meetups', addMeetups)
router.patch('/meetups/:id', updateeMetups )
router.delete('/meetups/:id', deleteMeetups)

module.exports = router
