import React from 'react'
import CardCompoent from './CardComponent'
import GeneralCard from './GeneralCard'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Projects.css'
import { StylesProvider } from '@material-ui/core/styles';
import Weather from '../Assets/weather_app.jpg'
import Covid from '../Assets/covid.png'
import ImageGallery from '../Assets/image-gallery1.jpg'
import Portfolio from '../Assets/portfolio.jpg'
import Medical from '../Assets/medical.jpg'
import Dashboard from '../Assets/dashboard.png'
import ObjectDetection from '../Assets/yolo-object-detection.jpg'
import Convolution from '../Assets/convolution.jpg'
import Maze from '../Assets/maze.jpg'

function Projects() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display:"flex",
          flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (
        <StylesProvider injectFirst>
        <div className="project-parent">
        <div className={"ProjectsDiv " + classes.root}>
            <Grid container spacing={6} className={"parentGrid"}>
                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <CardCompoent name="Weather App"
                                  details="Weather app created using React.js. Data is grabbed from the open weather map API." 
                                  gitLink="https://github.com/ukk77/weather-app"
                                  deployedLink="https://ukk77.github.io/weather-app/" 
                                  media={Weather}/>    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <CardCompoent name="Covid 19 Tracker"
                                  details="Covid 19 tracker app created using React.js. Data is grabbed from the disease.sh API." 
                                  gitLink="https://github.com/ukk77/covid-19-tracker"
                                  deployedLink="https://covidx19-tracker.herokuapp.com/" 
                                  media={Covid}/>    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Image Gallery App"
                                  details="Image gallery app created using React.js. Data is grabbed from firebase backend. Uploading images are allowed" 
                                  gitLink="https://github.com/ukk77/image-gallery"
                                  media={ImageGallery}/>    
                </Grid>
            </Grid>
        </div>
        <div className={"ProjectsDiv " + classes.root}>
            <Grid container spacing={6} className={"parentGrid"}>
                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <CardCompoent name="Portfolio"
                                  details="Portfolio app created using React.js. All effects created are using general CSS and material UI components." 
                                  gitLink="https://github.com/ukk77/weather-app"
                                  deployedLink="https://ukk77.github.io/weather-app/" 
                                  media={Portfolio} />    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Secure medical web app"
                                  details="A secure medical web app created using the MERN stack. This project also uses passport.js for authentication purposes." 
                                  gitLink="https://github.com/ukk77/secure_medical_website"
                                  media={Medical} />    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Admin Dashboard"
                                  details="Admin dashboard app created using React.js and Node.js. Data is grabbed from the openstack SWIFT API." 
                                  gitLink="https://github.com/ukk77/admin-dashboard"
                                  media={Dashboard} />    
                </Grid>
            </Grid>
        </div>
        <div className={"ProjectsDiv " + classes.root}>
            <Grid container spacing={6} className={"parentGrid"}>
                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Object Detection"
                                  details="Code written for object detection using Python and YOLO object detection. Output attached as a video" 
                                  gitLink="https://github.com/ukk77/YOLO-object-detection"
                                  media={ObjectDetection} />    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Image convolution"
                                  details="Code written to perform image convolutions from scratch in Python. This code only supports filter size of 3x3." 
                                  gitLink="https://github.com/ukk77/convolution-from-scratch"
                                  media={Convolution}/>    
                </Grid>

                <Grid item xs={12} sm={6} md={3} className="Cards">
                    <GeneralCard name="Maze solver"
                                  details="Maze solver created in Python. This maze solver uses the A* algorithm to traverse and solve a maze." 
                                  gitLink="https://github.com/ukk77/maze-solver-using-A-star-algorithm"
                                  media={Maze} />    
                </Grid>
            </Grid>
        </div>
        </div>
        </StylesProvider>
    )
}

export default Projects
