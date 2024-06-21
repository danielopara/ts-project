import dotenv from 'dotenv'
import userRouter from './router/UserRoutes'
import express  from 'express'
import sequelize from './config/db'

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/user', userRouter)
app.get('/hello', (req, res)=>{
    res.json({
        message: "hello"
    })
})



sequelize.authenticate()
.then(() => {
    console.log('connected..')
        app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
        })
})
.catch(err => {
    console.log('Error'+ err)
})

// sequelize.sync()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });