import React, { useState } from 'react'
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',


})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '0.3rem',
    width: '40%'

}))

const Icons = styled(Box)({
    display: 'flex',
    gap: '20px',
    alignItems: 'center'


})
const IconsMob = styled(Box)({
    display: 'flex',
    gap: '2px',
    alignItems: 'center'


})


export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (

        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography sx={{ display: { xs: "none", sm: "block" } }}>LAMONO</Typography>
                <SpaIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search   > <InputBase placeholder='Search Here' /></Search>
                <Icons onClick={e => setToggle(true)} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Badge badgeContent={4} sx={{ display: { xs: 'none', sm: 'block' } }} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge >
                    <Avatar src="public\image.jpeg" />
                </Icons>
                <IconsMob onClick={e => setToggle(true)} sx={{ display: { xs: "flex", sm: "none" } }}>
                    <Avatar src="public\image.jpeg" />
                    <Typography>john</Typography>
                </IconsMob>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"

                open={toggle}
                onClose={e => setToggle(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

        </AppBar >

    )
}
