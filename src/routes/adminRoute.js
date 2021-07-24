import app from "../app";
import {registerUser, authUser} from '../controllers/userController.js'


app.post('/', registerUser)
app.post('/login', authUser)


