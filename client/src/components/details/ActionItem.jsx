import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from "../../redux/actions/paymentActions";

const stripePromise = loadStripe('pk_test_51PNXNvDYxiYRNSsqrAGVuTl4cscDyOdjy4za9rvIfwYONHXaaXPIXIueRv6UVuKnk8gs4bzqdiLqDMrFIUmCcDru00TjDOGExG')

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '15px',
    width: '23rem',
    height: '32rem'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));

export function ActionItem({ product }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = product;


    const buyNow = async () => {
        const stripe = await stripePromise;
        
        try {
            const sessionId = await dispatch(createCheckoutSession([{ title: product.title, price: product.price, quantity }]));
            if (!sessionId) {
                console.error("Session ID is not available.");
                return;
            }
            const result = await stripe.redirectToCheckout({ sessionId });
            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error("Error in checkout:", error.message);
        }
    };

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }} ><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: '#fb541b' }} ><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}