import React from 'react'
import './Nav.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import pdf from '../Assets/Resume.pdf'


function Nav() {

    const openResume = () => {
        window.open(pdf);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(0),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    return (
        <div className={"Navbar " + classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <div className="left">
                    <div className="name">
                        UDDESH KARDA
                    </div>
                </div>    
            </Grid>
            
            <Grid item xs={6}>
            <div className="right">
                <Link to="/" className="home tab">Home</Link>
                <Link to="/Resume" className="resume tab" onClick={openResume}>Resume</Link>
                <Link to="/Projects" className="projects tab">Projects</Link>
                <Link to="/Contact" className="contact tab">Contact</Link>
            </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default Nav
