const express = require('express')
const router = express.Router()


// route       GET api/users
// dec         Get all users contacts
// access      Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// route       POST api/users
// dec         Add new contact
// access      Private
router.post('/', (req, res) => {
    res.send('Add new contact')
})

// route       PUT api/contacts/:id
// dec         Update contact
// access      Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// route       DELETE api/contacts/:id
// dec         Delete contact
// access      Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
})


module.exports = router;