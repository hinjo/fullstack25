const express = require("express"),
  path = require("path")

const app = express()

app.get("/api", (_request, response) => {
  response.send({ hello: "World" })
})

//kommer göra dist-mappen tillgänglig på rot-adressen
app.use(express.static(path.join(path.resolve(), "dist")))

app.listen(3002, () => {
  console.log("Redo på http://localhost:3002/")
})
