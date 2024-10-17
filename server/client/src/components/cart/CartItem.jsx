import { Box, Button, Typography, styled } from "@mui/material";
import { addellipsis } from "../../utils/common-utils";
import { GroupedButton } from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";



const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;
`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;
const ProductImage = styled('img')({
    height: 110,
    width: 110
});
const PriceTypography = styled(Typography)`
margin:20px 0;
font-weight:600;
font-size:18px;
`;


export function CartItem({ item }) {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <Component>
            <LeftComponent>
                <ProductImage src={item?.url} alt={item?.tile?.longTitle || "Product Image"} />
                <GroupedButton itemId={item?.id} quantity={item?.quantity || 1} />
            </LeftComponent>
            <Box style={{ margin: 20 }} >
                <Typography>{addellipsis(item?.title?.longTitle || "Product Title")}</Typography>
                <SmallText>Seller:{item?.seller || "RetailNet"}
                    <Box component='span'><img src={fassured} alt="flipkart" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <PriceTypography>
                    <Box component="span">₹{item?.price?.cost || 0}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item?.price?.mrp || 0}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item?.price?.discount || "0%"}</Box>
                </PriceTypography>
                <Remove onClick={() => removeItemFromCart(item?.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}