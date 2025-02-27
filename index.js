const express = require('express')
const itemsRouter = require('./controllers/items')

const app = express()

app.use(express.json())
app.use('/api/items', itemsRouter)

app.get('/', (req, res) => {
    res.send("Hey")
})

const PORT = 3000
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}, to terminate the process press Ctrl+C`)) 