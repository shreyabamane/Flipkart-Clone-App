import { Box, Button, styled, Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";

const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;
const Title = styled(Typography)`
    font-size: 28px;
    color: #d32f2f;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
`;
const Message = styled(Typography)`
    font-size: 18px;
    color: #878787;
    text-align: center;
    margin-bottom: 40px;
    line-height: 1.5;
    max-width: 500px;
`;
const BackButton = styled(Button)`
    font-size: 16px;
    padding: 10px 40px;
    color: #fff;
    background-color: #d32f2f;
    &:hover {
        background-color: #c62828;
    }
`;
const CancelIconStyled = styled(CancelIcon)`
    color: #d32f2f;
    font-size: 100px;
    margin-bottom: 20px;
`;

export function CancelPage(){
    return(
        <Component>
            <CancelIconStyled />
            <Title>Payment Canceled</Title>
            <Message>Your payment was canceled. If this was a mistake, you can try again or return to the home page.</Message>
            <BackButton component={Link} to="/">Go Back to Home</BackButton>
        </Component>
    )
}