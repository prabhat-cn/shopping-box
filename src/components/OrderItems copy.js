import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 const OrderItems = ()=> {
     
    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="container whole-container">
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={3}> 
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {boxData.map((data) => (
                                <div className="div-inner1 box-slice1" key={data.id}>
                                        {data.howMany > 0 ? (
                                            <>
                                            <div className="col-sm-3 col-md-12 col-lg-12 box-slice" style={{background: data.image, color: "#fff"}}>
                                            <span className="span-count">{data.howMany}</span>
                                                <h3 >{data.name}</h3>
                                            </div>
                                            </>
                                        
                                        ): null
                                        }
                                </div>
                            ))}
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </Grid>
                
                
                </Grid>
            </CardContent>
        </Card>
    </div>
  );
}

export default OrderItems;
