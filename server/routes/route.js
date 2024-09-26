import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { createCheckoutSession } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

//for payment using paytm
router.post('/create-checkout-session', createCheckoutSession);

export default router;