import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sort, addToCart, removeFromCart, addQuantity, subQuantity, emptyCart } from '../store/boxSlice'
import { uniqBy, orderBy } from 'lodash';
import  NumericInput  from 'react-numeric-input';

const Items = () => {
    const [ searchItem, setSearchItem ] = useState('');
    // const [ sortPrice, setSortPrice ] = useState([]);
    
    const dispatch = useDispatch();    
    
    const boxData = useSelector((boxState) => boxState.boxName.boxes);

    const boxType = useSelector((boxState) => boxState.boxName.selectedBoxType);
    console.log('boxType->', boxType);

    const handleChange = e => {
        setSearchItem(e.target.value)
    }
    const getTotalPrice = () => {
        let priceIn = 0;
        boxData.map((sumData) => {
          priceIn += sumData.price;
          return 0
        });
        return priceIn;
      };

    return (
        <>
        <div className="container whole-container">
            <h1>Choose Your Items</h1>
            <div className="row items">
                 
                    <div className="col-sm-8 col-md-8 col-lg-8 left-pan">
                        {
                            boxType !== undefined?
                            boxType == 'white'?
                            <p>white box</p>
                            :
                            <p>black box</p>
                            :
                            null
                        }
                        
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
                   
                
                    <div className="col-sm-4 col-md-4 col-lg-4 right-pan">
                        <div className="div-inner1">
                            <h3>Box Contents</h3>
                            {boxData.map((data) => (
                                <div className="div-inner1 box-slice1" key={data.id}>
                                        {data.howMany > 0 ? (
                                            <>
                                            <div className="col-md-6">
                                            <h5 className="span-count">{data.name}</h5>
                                                <h3 id="p" >
                                                {data.howMany * data.price}
                                                </h3>
                                            </div>
                                           
                                            <hr/>
                                            <div className="col-md-12">

                                            Total Price: {Math.round(getTotalPrice())}
                                            </div>
                                            </>
                                            
                                        ): null
                                        // <>
                                        //  <div className="col-sm-4 col-md-12 col-lg-12 box-slice2" >
                                        //  <p className="mt-2 mb-0 text-center" style={{fontSize: "18px"}}>No Box Item Found</p>
                                        //     </div>
                                        
                                        // </>
                                        }
                                        
                                </div>
                            ))}
                            
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
                        {/* <input type="text" value={searchItem} placeholder="Sort by category..." onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}/> */}
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
                        {/* <NumericInput  mobile className="form-control" /> */}
                        <button type='button' onClick={() => dispatch(decrement(data))}>-</button>
                            <input type="text" value={data.howMany} style={{textAlign: "center"}} />
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
