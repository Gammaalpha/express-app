const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.get('/derp', (req: any, res: any) => {
    console.log("DERP Called");

    res.json({ msg: 'derp' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})