const itemsRouter = require('express').Router()

itemsRouter.get("/", (req, res) => {
    res.json({"Hello": "World"})
})

itemsRouter.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({"Hello": id})
})

module.exports = itemsRouter