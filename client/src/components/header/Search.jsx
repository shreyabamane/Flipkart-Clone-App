import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer = styled(Box)`
   background: #FFF; 
   width: 38%;
   border-radius: 2px;
   margin-left: 10px;
   display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    paddind: 5px;
    display: flex;
`;

export function Search(){
    return (
        <SearchContainer >
            <InputSearchBase placeholder="Search for products, brands and more" />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
        
    )
}