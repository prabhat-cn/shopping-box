import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../store/boxSlice'
import { Link } from 'react-router-dom'

const Items = () => {
    const [ searchItem, setSearchItem ] = useState('');
    // const catData = useSelector((catState) => catState.boxName.categories);

    const boxData = useSelector((boxState) => boxState.boxName.boxes);
    // console.log('boxData ', boxData)
    const dispatch = useDispatch();
    const count = useSelector((state) => state.boxName.boxes);
    // console.log('count', count)

    const handleCategory = e => {
        setSearchItem(e.target.value)
        // setSearch('')
    }

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
                            {/* <input type="text" placeholder="Sort by category..." onChange={(e) => {
                                setSearchItem(e.target.value);
                            }}/> */}
                            <select name="category" value={searchItem} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        boxData.map(categoryItem => (
                            <option value={"category=" + categoryItem.category} key={categoryItem.id}>
                                {categoryItem.category}
                            </option>
                        ))
                    }
                </select>
                        </div>
                    </div>
                   
                
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="div-inner1">
                            <input type="text" value={searchItem} placeholder="Sort by category..." onChange={(e) => {
                                setSearchItem(e.target.value);
                            }}/>
                        </div>
                    </div>
            </div>

            <div className="row items1">
                {boxData.filter((val) => {
                    if(searchItem === ""){
                        return val
                    }else if(val.category.toLowerCase().includes(searchItem.toLowerCase())){
                        return val
                    }
                }).map((data) => (
                    <div className="col-sm-3 col-md-3 col-lg-3" key={data.id}>
                    <div className="div-inner1 text-center" >
                        <div className="div-inner1 py-4" style={{background: data.image, color: "#fff"}}>
                        <h4>{data.name}</h4>
                        {data.howMany > 0 ? (
                            <>
                            <button onClick={() => dispatch(decrement())}> - </button>

                              <input type="text" value={count} />

                            <button onClick={() => dispatch(increment())}> + </button>
                            </>
                            
                        ): 
                        <button
                            className="btn btn-info my-3 text-center"
                            >
                            Add To Box
                            </button>
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
    )
}

export default Items
