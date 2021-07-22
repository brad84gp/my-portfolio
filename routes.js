const express = require('express')

const router = new express.Router()

router.get('/', (req, res, next) => {
    try{
        return res.render("base.html")
    }catch (err) {
        return next(err)
    }
})

module.exports = router