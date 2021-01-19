import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import './Card.css'

function CardComponent(props) {

    const useStyles = makeStyles({
        root: {
          minWidth: 300,
          minHeight: 320
        },
        title: {
          fontSize: 14,
        },
        media: {
          height: 140,
        },
        pos: {
          marginBottom: 12,
        },
    });

    const classes = useStyles();
    
    const openLink = () => {
      window.open(props.gitLink)
    }
    
    const openDeployed = () => {
      window.open(props.deployedLink)
    }

    return (
        <StylesProvider injectFirst>
        <Card className={"Cardcss " + classes.root}>
            <CardMedia
              component="img"
              className={classes.media}
              image={props.media}
              title="abstracr blur"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="title">
                    {props.name}
                </Typography>
                
                <Typography variant="body2" component="p" className="details">
                    {props.details}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" className="buttons" onClick={openLink}>Code</Button>
                <Button size="small" className="buttons" onClick={openDeployed}>Live</Button>
            </CardActions>

        </Card>
        </StylesProvider>
    )
}


export default CardComponent
