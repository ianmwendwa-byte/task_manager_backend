const connectDb=require('./db/connect')
const express =require('express');
const app=express();
const tasks =require('./routes/tasks')
require('dotenv').config()
const notFound =require('./middleware/notFound')
// middleware
app.use(express.static('./public'))
app.use(express.json())
// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

// app.get('/api/v1/tasks')  -get all the tasks
// app.post('/api/v1/tasks')  -create a new task
// app.get('/api/v1/tasks/:id') -get single task
// app.patch('api/v1/tasks/:id') -update task
// app.dlete('/api/v1/tasks/:id') -delete task

const PORT =process.env.PORT|| 5000;
const start =async ()=> {  
    try{
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT,(req ,res)=>{
            console.log(`server running on the port: ${PORT}....`);
            })
    }
    catch(error){
    console.log(error)     
    } 
} 
start()