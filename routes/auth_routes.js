import {Router} from 'express';

const authRouter = Router ();

authRouter.post('/sign-up', (req,res) => res.send({body: {title: 'sign-up'}}));
authRouter.post('/sign-in', (req,res) => res.send({body: {title: 'sign-in'}}));
authRouter.post('/sign-out', (req,res) => res.send({body: {title: 'sign-out'}}));

export default authRouter;