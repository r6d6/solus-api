import app from './app'
import { port } from './config'

app.listen(port, () => {
    console.log(`Running on port ${port}!`)
})