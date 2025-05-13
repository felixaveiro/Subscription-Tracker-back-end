import express from 'express';
import {PORT} from './config/env.js'
import userRouter from './routes/users_routes.js';
import subscriptionRouter from './routes/subscription_routes.js';
import authRouter from './routes/auth_routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res)=> {
    res.send({ body: 'Welcome to our subscription tracker api' })
});

app.listen(PORT, async () => {
    console.log(`subscription is running on http://localhost:${PORT}`)

    await connectToDatabase();
})

export default app;