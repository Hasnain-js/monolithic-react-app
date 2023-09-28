import express from 'express';
import cors from 'cors'
import contest from '../local-contests.json'

const router = express.Router();
router.use(cors())
router.get('/contests', (req, res) => {
    res.send({contests: contest})
})

export default router;
