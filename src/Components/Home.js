import React from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid';
import Avatar from '../Assets/avatar1.png'
import Git from '../Assets/GitHub-Mark-32px.png'
import Linkedin from '../Assets/LI-In-Bug.png'
import Email from '../Assets/email-logo.jpg'
import Pycharm from '../Assets/icon-pycharm-ce.png'
import JupyterNotebook from '../Assets/jupyter-notebook.png'
import VisualStudio from '../Assets/visual-studio.png'


function Home() {

    const openLink = (link) => {
        window.open(link);
    }

    return (
        <div className="home">
            <Grid container spacing={0}>
                <Grid item xs={6} className="icon">
                    <div className="avatar-icon">
                        <img src={Avatar} alt="My Avatar" className="avatar"/>
                    </div>

                    <div className="about">
                        <h2 className="about-title">About me:</h2>
                        <p className="about-content"> 
                            Hello visitor. Greetings from Uddesh Karda. I currently am a master's student
                            in the computer science department at Rochester Institute of Technology. I am an
                            Indian citizen and came to the United States in 2018 fall for my master's. I love 
                            working with any kind of technology in general. Gaming is a big part of my life along 
                            with cooking and cycling. I will be available to work for full time from the third week 
                            of May 2021.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={6} className="links-and-tools">
                    <h2 className="links-title">Links :</h2>
                    <div className="logos">
                        <div className="git">
                            <img src={Git} alt="Github icon" title="Github link" className="git image" onClick={() => openLink("https://github.com/ukk77")}/>
                        </div>

                        <div className="linkedin">
                            <img src={Linkedin} alt="Linkedin icon" title="Linkedin link" className="linkedin image" onClick={() => openLink("https://www.linkedin.com/in/uddesh-karda-ab1784131/")}/>
                        </div>

                        <div className="email">
                            <img src={Email} alt="Email icon" title="email : kardauddesh@gmail.com" className="email image" onClick={() => openLink("mailto:kardauddesh@gmail.com")}/>
                        </div>
                    </div>

                    <h2 className="tools-title">Tools I use :</h2>
                    <div className="tools">
                        <div className="pycharm">
                            <img src={Pycharm} alt="pycharm logo" title="pycharm" className="pycharm image" 
                            onClick={() => openLink("https://www.jetbrains.com/pycharm/")}/>
                        </div>

                        <div className="jupyter-notebook">
                            <img src={JupyterNotebook} alt="jupyter notebook logo" title="jupyter notebook" 
                            className="jupyter-notebook image" onClick={() => openLink("https://jupyter.org/")}/>
                        </div>

                        <div className="jupyter-notebook">
                            <img src={VisualStudio} alt="visual studio logo" title="visual studio" 
                            className="visual-studio image" onClick={() => openLink("https://code.visualstudio.com/")}/>
                        </div>
                    </div>
                </Grid>
            </Grid>            
        </div>
    )
}


export default Home
