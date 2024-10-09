import { Box, Grid, Typography, Link, Divider, IconButton, styled } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const StyledFooter = styled(Box)`
 background-color: #1B1212;
 color: #ffffff;
 padding: 40px 4vw 20px 4vw;
 margin-top: 50px;
`;
const Heading = styled(Typography)`
 margin-bottom: 12px;
 font-size: 12px;
 color: #878787;
`;
const SubHeading = styled(Typography)`
 color: #fff;
 font-size: 12px;
 font-weight: bold;
 text-decoration: none;
 line-height: 18px;
 display: block;
`;

export function Footer() {
    return (
        <StyledFooter>
            <Grid container spacing={3} alignItems="flex-start">

                {/* About Section */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>ABOUT</Heading>
                    <SubHeading component={Link} href="#" >Contact Us</SubHeading>
                    <SubHeading component={Link} href="#" >About Us</SubHeading>
                    <SubHeading component={Link} href="#" >Careers</SubHeading>
                    <SubHeading component={Link} href="#" >Flipkart Stories</SubHeading>
                    <SubHeading component={Link} href="#" >Press</SubHeading>
                    <SubHeading component={Link} href="#" >Corporate Information</SubHeading>
                </Grid>

                {/* Group Companies */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>GROUP COMPANIES</Heading>
                    <SubHeading component={Link} href="#" >Myntra</SubHeading>
                    <SubHeading component={Link} href="#" >Cleartrip</SubHeading>
                    <SubHeading component={Link} href="#" >Shopsy</SubHeading>
                </Grid>

                {/* Help Section */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>HELP</Heading>
                    <SubHeading component={Link} href="#" >Payments</SubHeading>
                    <SubHeading component={Link} href="#" >Shipping</SubHeading>
                    <SubHeading component={Link} href="#" >Cancellation & Returns</SubHeading>
                    <SubHeading component={Link} href="#" >FAQ</SubHeading>
                    <SubHeading component={Link} href="#" >Report Infrigement</SubHeading>
                </Grid>

                {/* Consumer Policy Section */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>CONSUMER POLICY</Heading>
                    <SubHeading component={Link} href="#" >Cancellation & Returns</SubHeading>
                    <SubHeading component={Link} href="#" >Terms Of Use</SubHeading>
                    <SubHeading component={Link} href="#" >Security</SubHeading>
                    <SubHeading component={Link} href="#" >Privacy</SubHeading>
                    <SubHeading component={Link} href="#" >Sitemap</SubHeading>
                    <SubHeading component={Link} href="#" >Grievance Redressal</SubHeading>
                    <SubHeading component={Link} href="#" >EPR compliance</SubHeading>
                </Grid>

                {/* Vertical Divider */}
                <Grid item>
                    <Divider orientation='vertical' variant='middle' sx={{ backgroundColor: '#454d5e', height: '200px' }} />
                </Grid>

                {/* Mail Us Section */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>MAIL US</Heading>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Flipkart Internet Private Limited,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Buildings Alyssa, Begonia &</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Clove Embassy Tech Village,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Outer Ring Road, Devarabeesanahalli Village,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Bengaluru, 560103, Karnataka, India</Typography>

                    <Box sx={{ display: 'flex', marginTop: '12px' }}>
                        <IconButton href="#" sx={{ color: '#ffffff' }}><Facebook /></IconButton>
                        <IconButton href="#" sx={{ color: '#ffffff' }}><Twitter /></IconButton>
                        <IconButton href="#" sx={{ color: '#ffffff' }}><Instagram /></IconButton>
                        <IconButton href="#" sx={{ color: '#ffffff' }}><YouTube /></IconButton>
                    </Box>
                </Grid>

                {/* Registered Office Section */}
                <Grid item xs={12} sm={6} md={1.96}>
                    <Heading>REGISTERED OFFICE ADDRESS</Heading>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Flipkart Internet Private Limited,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Buildings Alyssa, Begonia &</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Clove Embassy Tech Village,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Outer Ring Road, Devarabeesanahalli Village,</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>Bengaluru, 560103, Karnataka, India</Typography>
                    <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'regular', lineHeight: '18px' }}>CIN: U51109KA2012PTC066107</Typography>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: '#454d5e', margin: '30px 0', }} />

            {/* Copyright Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Typography sx={{ textAlign: 'center', color: '#878787', fontSize: '12px' }}>
                    ©2007-2024 Flipkart.com
                </Typography>
            </Box>
        </StyledFooter>
    );
}
