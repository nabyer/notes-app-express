import app from "./app"

// we define our port
const port = 3000;

// start our server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}.`)
})