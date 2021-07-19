import React, {createRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import pdfIcon from '../assets/file-pdf-solid.svg'
import Pdf from "react-to-pdf";

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


const ref = createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4,2]
};


 const OrderItems = ()=> {
     
    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    const amount = boxData.map(m => m.howMany * m.price).reduce((a, b) => a + b, 0);
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="container whole-container">
       <Pdf targetRef={ref} filename={`invoice-${+new Date()}.pdf`} >
              {({ toPdf }) => 

                <button className="pdf-butt" type="button" onClick={toPdf}>
                  <img style={{width: "5%"}} src={pdfIcon} alt="pdf" /> 
                   Download Pdf
                </button>

              }
        </Pdf>

        <Card className={classes.root} ref={ref}>
        
          <CardContent>
            <Grid container >

              <div className="col-md-12 flex-cart" >
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
                  <div className="col-md-6">
                      <h3>Total Price</h3> <h3>{amount}</h3>
                  </div>
                  
              </div>
            
            {/* <div className="col-md-12 fl-right">
                <div className="col-md-6">
                <Pdf targetRef={ref} filename="invoice.pdf">
                  {({ toPdf }) => 

                    <button className="pdf-butt" type="button" onClick={toPdf}>
                      <img style={{width: "5%"}} src={pdfIcon} alt="pdf" /> 
                      Download Pdf
                    </button>

                  }
                </Pdf>
                  
                    <p><img style={{width: "5%"}} src={pdfIcon} alt="pdf" /> Download Order List </p>
                </div>

                <div className="col-md-6">
                    <h3>Total Price</h3> <h3>{amount}</h3>
                </div>
                
              

            </div> */}
            </Grid>
          </CardContent>
             
        </Card>
        </div>
  );
}

export default OrderItems;
