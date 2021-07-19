import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sort } from '../store/boxSlice'
import { uniqBy, orderBy } from 'lodash';


function Items() {

   const [ searchItem, setSearchItem ] = useState('');
    
    const dispatch = useDispatch();    
    
    const boxData = useSelector((boxState) => boxState.boxName.boxes);

    const boxType = useSelector((boxState) => boxState.boxName.selectedBoxType);
    console.log('boxType->', boxType);

    const handleChange = e => {
        setSearchItem(e.target.value)
    }
    

    return (
        <>
        <div className="container whole-container">
            <h1>Choose Your Items</h1>
            <div className="row items">
                 
                    <div className="col-sm-7 col-md-7 col-lg-7 left-pan">
                    <div className="div-inner1 box-slice1" >
                        {
                            boxType !== undefined?
                            boxType === 'white'?
                            <div className="col-sm-3 col-md-12 col-lg-12 box-slice selected-box">
                                <h3 >
                                White Box
                                </h3>
                            </div>
                            
                            :
                            <div className="col-sm-3 col-md-12 col-lg-12 box-slice selected-box">
                                <h3 >
                                Black Box
                                </h3>
                            </div>
                            :
                            null
                        }
                        </div>
                        
                            {boxData.map((data) => (
                                <div className="div-inner1 box-slice1" key={data.id}>
                                        {data.howMany > 0 ? (
                                            <>
                                            <div className="col-sm-3 col-md-12 col-lg-12 box-slice" style={{background: data.image, color: "#fff"}}>
                                            <span className="span-count">{data.howMany}</span>
                                                <h3 >
                                                {data.name}
                                                </h3>
                                            </div>
                                            </>
                                        
                                        ): null
                                        }
                                </div>
                            ))}
                        </div>
                   
                
                    <div className="col-sm-5 col-md-5 col-lg-5 right-pan">
                        <div className="div-inner1">
                            <h3>Box Contents</h3>
                            
                            <div className="section one-sec">
                                {boxData.map((data) => (
                                    <div className="div-inner1 box-slice1" key={data.id}>
                                        {data.howMany > 0 ? (
                                            <>
                                            <div className="col-md-6">
                                                <h5 className="span-count">{data.name}</h5>
                                            </div>
                                            <div className="col-md-6">
                                                <h3>
                                                ${data.howMany * data.price}
                                                </h3>
                                            </div>
                                            </>
                                            
                                        ): null
                                        }
                                    </div>
                                ))}
                            </div>
                            
                            
                            <hr/>
                            <div className="col-md-12">
                               Total Price: ${boxData.map(m => m.howMany * m.price).reduce((a, b) => a + b, 0)}
                            </div>
                            
                        </div>
                            
                    </div>
            </div>
            </div>

        <div className="container whole-container">

        <div className="section1 full-sec my-4">
        <div className="row items1">
            
            <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="div-inner1">
                    <select name="category" 
                    onChange={handleChange} 
                    style={{
                            height: "40px", 
                            padding: "0 5px", 
                            width: "100%", 
                            fontSize:"14px"
                        }}>
                        <option value=''>Sort By Category</option>
                        {
                            // "uniqBy" is lodash
                            uniqBy(boxData, 'category').map(categoryItem => (
                                <option value={categoryItem.category} key={categoryItem.id}>
                                    {categoryItem.category}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
                        
                        
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="div-inner1">
                        
                        <input 
                            style={{
                            height: "40px",
                            padding: "0 5px", 
                            width: "100%", 
                            fontSize:"14px"}} 
                            type="text" 
                            placeholder="Search by name.." 
                            onChange={(e) => {
                                setSearchItem(e.target.value);
                            }}
                        /> 
                        
                    </div>
                </div>

                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="div-inner1">
                        <select 
                        style={{height: "40px", padding: "0 5px", width: "100%", fontSize:"14px"}}  
                        onChange={(e) => dispatch(sort(e.target.value))}>
                            <option value='all'>All</option>
                            <option value='hl'>Price: Hight-Low</option>
                            <option value='lh'>Price: Low-High</option>
                        </select>
                    </div>
                </div>

                <p className="entry-title font-size-7 text-center">
                You Have: (
                {boxData.length}
                ) items
                </p>

                {Object.keys(boxData).length === 0 && (
                <span className="success-msg">No Item Found</span>
                )}
        </div>

        <div className="row items1">
            {boxData.filter((val) => {
                if(searchItem === ""){
                    return val
                }else if(val.category.toLowerCase().includes(searchItem.toLowerCase())){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                    return val
                }
                else if(val.searchItem){
                    return val
                }

            }).map((data) => (
                <div className="col-sm-3 col-md-3 col-lg-3" key={data.id}>
                <div className="div-inner1 text-center" >
                    <div className="div-inner1 pt-4 pb-2" 
                    style={{background: data.image, color: "#fff"}}>
                    <h4>{data.name}</h4>
                    {data.howMany === 0 ? (
                        <>
                        <button
                            type='button'
                            className="btn btn-info my-3 text-center"
                            onClick={(e) => dispatch(increment(data))}>
                            Add To Box
                        </button>
                    </>
                    ): 
                    <>
                        <button type='button' onClick={() => dispatch(decrement(data))}>-</button>
                            <input type="text" value={data.howMany} className="input-count" style={{textAlign: "center"}} />
                        <button type='button' onClick={() => dispatch(increment(data))}>+</button>
                    </>
                    }
                    </div>
                    <p className="mt-2 mb-0 text-left" style={{fontSize: "18px"}}>{data.name}</p>
                    <p className="mt-0 mb-1 text-left" style={{fontSize: "18px"}}>{data.category}</p>
                    <p className="mt-0 mb-1 text-left" style={{fontSize: "18px"}}>{data.priceUnit}{data.price}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        </div>

        </>
    )
}

export default Items
