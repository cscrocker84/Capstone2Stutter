'use strict'

const {Router} = require('express')
const router = Router()

const {getMeetups, addMeetup, deleteMeetup, updateMeetup} = require('../controllers/meetupCtrl')

console.log("meetup");

router.get('/meetups', getMeetups)
router.post('/meetups', addMeetup)
// router.patch('/meetups', updateMeetup)
// router.delete('/meetups', deleteMeetup)

module.exports = router
