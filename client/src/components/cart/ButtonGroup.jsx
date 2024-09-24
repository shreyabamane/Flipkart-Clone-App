import { Button, ButtonGroup, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/actions/cartActions";


const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;


export function GroupedButton({ itemId, quantity }) {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            dispatch(decrementQuantity(itemId));
        }
    };

    return (
        <Component>
            <StyledButton onClick={handleDecrement}>-</StyledButton>
            <Button>{quantity}</Button>
            <StyledButton onClick={handleIncrement}>+</StyledButton>
        </Component>
    )
}