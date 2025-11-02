import express from 'express';

import {addhotelentry} from '../controller/hotelentrycontroller.js';


const router = express.Router();


router.post('/add',addhotelentry);



export default router;