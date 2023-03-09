import React from 'react'
import { useState,useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";

export default function RightSide() {
    const [data,setData]=useState([]);
    const [search,setSearch]=useState('');

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleClick=()=>{
        console.log("submitted");
        axios.post(`http://localhost:2000/api/searchProducts`, { product_name: search})
        .then(res => {
        console.log(res);
        // console.log(res.data.products);
        setData(res.data.products)
    })
    }

    const handleDropdown=(e)=>{
        console.log("dropdown",e.target.value);
        if(e.target.value == "All"){
            axios.get('http://localhost:2000/api/getProducts')
        .then(res=>{
          console.log(res.data.products);
          setData(res.data.products);
        })
        .catch(err=>{
          console.log(err);
        })
        } else if (e.target.value == "Computer") {
            axios.post(`http://localhost:2000/api/searchProducts`, { product_name: "computer" })
                .then(res => {
                    console.log(res);
                    // console.log(res.data.products);
                    setData(res.data.products)
                })
        }
    }

    useEffect(()=>{
        console.log("reloaded")
        axios.get('http://localhost:2000/api/getProducts')
        .then(res=>{
          console.log(res.data.products);
          setData(res.data.products);
        })
        .catch(err=>{
          console.log(err);
        })
      },[])
  return (
    <>
      <div className='c2d2'>
                    <div className='c2-body'>
                        <h1 style={{
                            marginTop: "10px"
                        }}>Catalog</h1>

                        {/* search-cont */}
                        <div className='search-cont'>
                            <div style={{
                                width: "70%"
                            }}>
                                <button onClick={handleClick} style={{
                                    padding: "11px 20px 12px",
                                    backgroundColor: "white",
                                    // border: "1px solid #ccc",
                                    // borderRadius: "4px",
                                    borderStyle: "solid",
                                    borderColor: "#ccc",
                                    borderWidth: "1px 0px 1px 1px",
                                    cursor: "pointer"
                                }}>
                                    <AiOutlineSearch />
                                </button>
                                <input type="text" className='search-products' onChange={handleChange} />
                                {
                                    console.log(search)
                                }
                            </div>
                            <div style={{
                                width: "30%"
                            }}>
                                <select name="category" id="category" className='search-popular' onClick={handleDropdown}>
                                    <option value="All">All</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Games">Games</option>
                                    <option value="Popular">Popular</option>
                                </select>
                                {
                                    // console.log("cars",cars)
                                }
                            </div>
                        </div>
                        
                        {/* card-div */}
                        <div className='card-div'>
                        {data.map((e)=>{
                            return <div className='parent-card'>
                                <div className='pic-div' style={{ position: "relative" }}>
                                <img src={e.product_image} alt="" style={{ 
                                        width: "100%",
                                        height: "149px"
                                     }} />
                                     <AiFillHeart style={{ 
                                        fontSize: "25px", 
                                        color: "black",
                                        position: "absolute",
                                        top: "9%",
                                        right: "6%"
                                        }} onClick={(e)=>{e.target.style.color= e.target.style.color === "black" ? "red" : "black"}}></AiFillHeart>
                                </div>
                                <div className='content-div'>
                                    <p style={{ 
                                        marginTop: "4%",
                                        fontSize: "12px"
                                     }}>Vendor Code #{e.vendor_code}</p>
                                    <p style={{ 
                                        marginTop: "3%",
                                        fontWeight: "bold"
                                     }}>{e.product_name}</p>
                                    <p style={{ 
                                        marginTop: "4%",
                                        fontSize: "12px"
                                     }}>Price</p>
                                    <p style={{ 
                                        marginTop: "3%",
                                        fontWeight: "bold"
                                     }}>{e.product_price} $</p>
                                </div>
                            </div>
                        })}
                        </div>

                        {/* <div className='card-div'>
                            <div className='parent-card'>
                                <div className='pic-div'>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" style={{ 
                                        width: "100%",
                                        height: "149px"
                                     }} />
                                </div>
                                <div className='content-div'>
                                    <p style={{ 
                                        marginTop: "4%",
                                        fontSize: "12px"
                                     }}>Vendor Code #123</p>
                                    <p style={{ 
                                        marginTop: "3%",
                                        fontWeight: "bold"
                                     }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                    <p style={{ 
                                        marginTop: "4%",
                                        fontSize: "12px"
                                     }}>Price</p>
                                    <p style={{ 
                                        marginTop: "3%",
                                        fontWeight: "bold"
                                     }}>400 $</p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
    </>
  )
}
