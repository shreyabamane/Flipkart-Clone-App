import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

//Components
import { CartItem } from "./CartItem";
import { TotalBalance } from "./TotalBalance";
import { EmptyCart } from "./EmptyCart";
import { createCheckoutSession } from "../../redux/actions/paymentActions";

//Initialize Stripe with publishable key
const stripePromise = loadStripe('pk_test_51PNXNvDYxiYRNSsqrAGVuTl4cscDyOdjy4za9rvIfwYONHXaaXPIXIueRv6UVuKnk8gs4bzqdiLqDMrFIUmCcDru00TjDOGExG');


const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
    &:hover {
        background-color: #f5511e;
    }
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));


export function Cart() {

    const { CartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlaceOrder = async () => {

        const stripe = await stripePromise;

        try {
            const sessionId = await dispatch(createCheckoutSession(CartItems));
            if (!sessionId) {
                console.error("Failed to create checkout session.");
                return;
            }

            const result = await stripe.redirectToCheckout({ sessionId });
            if (result.error) {
                console.error(result.error.message);
            } else {
                navigate('/success');
            }
        } catch (error) {
            console.error("Error in Stripe Checkout:", error.message);
        }
    }

    return (
        <>
            {
                CartItems.length ? (
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12} >
                            <Header>
                                <Typography>My Cart ({CartItems.length})</Typography>
                            </Header>
                            {
                                CartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={handlePlaceOrder} disabled={!CartItems.length}>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12} >
                            <TotalBalance CartItems={CartItems} />
                        </Grid>
                    </Container>
                ) : (
                    <EmptyCart />
                )
            }
        </>
    )
}