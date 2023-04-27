const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');
const { notFound,errorHandler } = require('./middleware/errorMiddleware');
const chatRoutes = require("./routes/chatRoute");
const messageRoutes = require('./routes/messageRoute');

dotenv.config();
connectDB();

const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Api is running successfully.");
})

//route for user api
app.use('/api/user',userRoutes);

//route for chat api
app.use('/api/chat',chatRoutes);

//route for message api
app.use('/api/message',messageRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`Server Started on port ${PORT}`));
