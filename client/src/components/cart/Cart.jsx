import { Box, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux"

//Components
import { CartItem } from "./CartItem";
import { TotalBalance } from "./TotalBalance";


const Container = styled(Grid)`
   padding: 30px 135px;
`;

const Header = styled(Box)`
    padding: 15px 24px;
`;


export function Cart(){

    const { CartItems } = useSelector(state => state.cart);

    return (
        <>
           {
              CartItems ?
                  <Container container>
                    <Grid item lg={9} md={9} sm={3} xs={3} >
                        <Header>
                            <Typography>My Cart ({CartItems.length})</Typography>
                        </Header>
                        {
                            CartItems.map(item => (
                                <CartItem item={item}/>
                            ))
                        }
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                        <TotalBalance />
                    </Grid>
                  </Container> 
                : <div>Empty</div>  
           }
        </>
    )
}