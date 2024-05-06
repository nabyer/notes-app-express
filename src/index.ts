import app from "./app"

// we define our port
const PORT = 3000;

// start our server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}.`)
})