const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { encode } = require('base64-arraybuffer')
const app = express()

app.use(cors())
// app.use(express.static('assets'))

const TIFF_DESCRIPTORS = [
  { id: 1, name: 'sample1' },
  { id: 2, name: 'document' },
  { id: 3, name: 'picture' },
];

app.get('/api/tiffs', (req, res) => res.json(TIFF_DESCRIPTORS))
app.get('/api/tiffs/:id', (req, res) => {
  const id = +req.params.id
  const descriptor = TIFF_DESCRIPTORS.find(f => f.id === id)
  fs.readFile(`${__dirname}/${id}.tiff`, (err, b) => {
    const content = encode(b.buffer) //b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) // to ArrayBuffer
    res.json({ ...descriptor, content })
  })
})

app.listen(4300, () => console.log('Server listening on port 4300'))
