import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const CategoryBox = () => {

    // const boxData = useSelector((boxState) => boxState.boxName.boxes);
    // console.log('boxData', boxData)
    return (
        <div className="container whole-container">
            <h1>Choose Your Box Color</h1>
            <div className="row">
                 
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="div-inner white-box">
                            <Link to='/category/items'>
                                <div className="div-inn">
                                    <p className="div-inp">
                                            <h2>White Box</h2>
                                        </p>
                                </div>
                            </Link> 
                        </div>
                    </div>
                   
                
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="div-inner black-box">
                        <Link to='/category/items'>
                            <div className="div-inn">
                                <p className="div-inp">
                                    <h2>Black Box</h2>
                                </p>
                            </div>
                        </Link>
                        </div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default CategoryBox
