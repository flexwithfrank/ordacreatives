import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from "react-router-dom";
import ReactDOM from "react-dom";
import 'react-responsive-modal/styles.css';


export default function NavBar() {

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {ordaCreatives}
               <div>{getMenuButtons()}</div> 
            </Toolbar>
        );
    };

    const ordaCreatives = (
        <Typography variant="h6" component="h1">
            <span className='visage'>Orda Creatives</span>
        </Typography>
    );

    const getMenuButtons = () => {
        return navData.map(({ label, href }) => {
            return (
                <Button {...{
                    key: label,
                    color: 'inherit',
                    to: href,
                    component: RouterLink,
                    className: menuButton
                }}>
                    {label}
                </Button>
            );
        });
    };
    const useStyles = makeStyles(() => ({
        header: {
            backgroundColor: "#400CCC",
            paddingRight: "79px",
            paddingLeft: "50px",
        },
        menuButton: {
            marginLeft: '38px',
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
    }));

    const { header, menuButton, toolbar } = useStyles();

    const navData = [
        {
            label: 'Sign Up',
            href: '/listings',
        },
        {
            label: 'Send message',
            href: '/email'
        },
    ];

    return(
        <header>
            <AppBar position="absolute" className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}