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
    const amount = boxData.map(m => m.howMany * m.price).reduce((a, b) => a + b, 0);
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="container whole-container">
        <Card className={classes.root}>
        
        <CardContent>
        <Grid container >

        <div className="col-md-12 flex-cart">
            <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>

            {
                boxData.map((cartData)=> (
                    <tr>
                    {cartData.howMany > 0 ? (
                    <>
                    <td>

                        <div className="div-inner1 box-slice1" style={{maxWidth: "70px"}}>
                        <>
                        <div className="box-slice" style={{background: cartData.image, color: "#fff"}}>

                        <h3 >{cartData.name}</h3>
                        </div>
                        </>
                        </div>
                    </td>

                    <td>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>

                        <div className="div-inner1 box-slice1" >
                        <h5 className="qty-data">{cartData.category}</h5>
                        </div>

                        </Typography>
                    </td>

                    <td>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>

                        <div className="div-inner1 box-slice1" >
                        <h5 className="qty-data">{cartData.howMany}</h5>
                        </div>

                        </Typography>
                    </td>

                    <td>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>

                        <div className="div-inner1 box-slice1" >
                        <h5 className="qty-data">{cartData.priceUnit}{cartData.price}</h5>
                        </div>

                        </Typography>
                    </td>
                    </>
                    ): null
                }
                </tr>
                

                ))
            }
            
        </div>
        <div className="col-md-12 fl-right">
           <h3>Total Price</h3> <h3>{amount}</h3>

        </div>
        </Grid>
        </CardContent>
             
        </Card>
        </div>
  );
}

export default OrderItems;
