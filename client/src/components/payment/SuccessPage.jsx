import { Box, Button, styled, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
const Title = styled(Typography)`
    font-size: 28px;
    color: #2874f0;
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
    background-color: #fb641b;
    &:hover {
        background-color: #f5511e;
    }
`;
const SuccessIcon = styled(CheckCircleIcon)`
    color: #4caf50;
    font-size: 100px;
    margin-bottom: 20px;
`;

export function SuccessPage() {
    return (
        <Component>
            <SuccessIcon />
            <Title> Payment Successful!</Title>
            <Message>Thank you for your purchase. Your payment was successfully processed.</Message>
            <BackButton component={Link} to="/">Go Back to Home</BackButton>
        </Component>
    )
}