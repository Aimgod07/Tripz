import express from 'express';
import { addTicketEntry } from '../controller/ticketentrycontroller.js';
import {addSinglePrice} from '../controller/pricecontroller.js';
import { getSinglePrice } from '../controller/pricecontroller.js';
import { getAllPrices } from '../controller/pricecontroller.js';
 


const router = express.Router();

router.get('/getAll', getAllPrices);
router.get('/getPrice', getSinglePrice);
router.post('/addPrice',addSinglePrice);


router.post('/add',addTicketEntry);




export default router;