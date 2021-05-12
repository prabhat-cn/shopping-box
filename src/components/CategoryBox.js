import React from 'react'
import { useSelector } from 'react-redux'

const CategoryBox = () => {

    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    console.log('boxData', boxData)
    return (
        <div className="container whole-container">
            <div className="row">
                {boxData.map((box) => (
                    
                    <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="div-inner white-box">
                        <div className="div-inn">
                        <p className="div-inp">
                            <h2>{box.category}</h2>
                        </p>
                        </div>
                    
                    </div>
                    
                </div>
                ))}
                {/* <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="div-inner black-box">
                    <div className="div-inn">
                    <p className="div-inp">
                        <h2>{box.category}</h2>
                    </p>
                    </div>
                    
                    </div>
                </div> */}
                
                    
                
                
            </div>
            
        </div>
    )
}

export default CategoryBox
