import { Box, Typography, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p{
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6{
        margin-bottom: 20px;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`;


export function TotalBalance() {

    const CartItems = useSelector((state) => state.cart.CartItems);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount]= useState(0);

    

    const calculateTotals = useCallback(() => {
      const {totalPrice,totalDiscount} = CartItems.reduce(
        (acc,item) => {
            const itemPrice = item.price.mrp || 0;
            const itemCost = item.price.cost || 0;
            const itemQuantity = item.quantity || 1;
            acc.totalPrice+=itemPrice * itemQuantity;
            acc.totalDiscount+=(itemPrice-itemCost) * itemQuantity;
            return acc;
        },
        {totalPrice:0, totalDiscount:0}
      );

      setTotalPrice(totalPrice);
      setTotalDiscount(totalDiscount);
    },[CartItems])

    useEffect(()=>{
        calculateTotals();
    },[calculateTotals]);

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({CartItems.length} item)
                    <Price component="span">₹{totalPrice}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{totalDiscount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">₹{totalPrice - totalDiscount + 40 }</Price>
                </Typography>
                <Discount>You will save ₹{totalDiscount-40} on this order</Discount>
            </Container>
        </Box>
    )
}