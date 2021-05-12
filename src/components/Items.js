import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Items = () => {

    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    console.log('boxData', boxData)

    return (
        <div className="container whole-container">
            <h1>Choose Your Items</h1>
            <div className="row items">
                 
                    <div className="col-sm-8 col-md-8 col-lg-8 left-pan">
                        <div className="div-inner1">
                            <h3>Items</h3>
                        </div>
                    </div>
                   
                
                    <div className="col-sm-4 col-md-4 col-lg-4 right-pan">
                        <div className="div-inner1">
                            <h3>Box Contents</h3>
                        </div>
                    </div>
            </div>

            <div className="row items1">
                 
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="div-inner1">
                            <h4>Sort by category</h4>
                        </div>
                    </div>
                   
                
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="div-inner1">
                            <h4>Sort by Price</h4>
                        </div>
                    </div>
            </div>

            <div className="row items1">
                {boxData.map((data) => (
                    <div className="col-sm-3 col-md-3 col-lg-3" key={data.id}>
                    <div className="div-inner1 text-center" >
                        <div className="div-inner1" style={{background: data.image, color: "#fff"}}>
                        <h4>{data.name}</h4>
                        {data.howMany === 0 ? (
                            <button
                            className="btn btn-danger my-3 text-center"
                            >
                            Add To Box
                            </button>
                        ): null}
                        </div>
                        
                        
                        <p className="my-2 text-left" style={{fontSize: "18px"}}>{data.priceUnit}{data.price}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Items
