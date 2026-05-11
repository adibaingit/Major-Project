require('dotenv').config();
const app=require('./src/app');
const connectDB=require('./src/db/db')
const cors=require('cors')

connectDB();

app.use(cors({
    origin: "http://localhost:5173" 
}));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})