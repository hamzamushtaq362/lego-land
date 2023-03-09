import React from 'react'
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import '../style/home.css'
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { IoIosGitCompare } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagDash } from 'react-icons/bs';
import Body from './Body';

export default function NavBar() {
    return (
        <>
        <div className='main'>
            {/* cont1 start */}
            <div className='cont1'>
                {/* c1d1 start */}
                <div className='c1d1'>
                    {/* c1d1-1 start */}
                    <div className='c1d1-1'>

                        {/* c1logo start */}
                        <div className='c1logo'>
                            <div className='icon'>
                                <AiOutlineTrademarkCircle style={{ fontSize: "30px" }} />
                            </div>
                            <div>
                            <NavLink to="/" style={{ 
                                listStyleType: "none",
                                color: "black"
                             }}>
                            <h3>LEGO LAND</h3>
                                <p>RED BRICK</p>
                            </NavLink>
                                {/* <h3>LEGO LAND</h3>
                                <p>RED BRICK</p> */}
                            </div>
                        </div>
                        {/* c1logo end */}

                        {/* nav2 start */}
                        <div className="nav2">
                            <ul className='ul1'>
                                <li className="li2 liWidth">
                                    <NavLink to="/toys" className="a2" >Toy</NavLink>
                                </li>
                                <li className="li2 liWidth">
                                    <NavLink className="a2" to="/catalog">Catalogs</NavLink>
                                </li>
                                <li className="li2 liWidth">
                                    <NavLink className="a2" to="/character">Characters</NavLink>
                                </li>
                                <li className="li2 liWidth">
                                    <NavLink className="a2" to="/brand">Brands</NavLink>
                                </li>
                                <li className="li3 liWidth">
                                    <div className='eng'>
                                        <TbWorld className='tW' />
                                        <p>ENG</p>
                                    </div>
                                </li>
                                <li className="li3 liWidth" style={{ padding: "26px 22px 14px" }}>
                                <NavLink className="a2" to="/register">Alexender</NavLink>
                                    {/* <p>Alexender</p> */}
                                </li>
                            </ul>

                        </div>
                        {/* <Outlet /> */}
                        {/* nav2 end */}
                    </div>
                    {/* c1d1-1 end */}

                    {/* c1d1-2 start */}
                    <div className='c1d1-2'>

                        {/* c1logo start */}
                        <div className='c2logo'>
                            <div className='icon main-page'>
                                <BiHomeAlt style={{ fontSize: "18px", margin: "6px" }} />
                                <span>Main Page</span>
                                <AiOutlineRight style={{ fontSize: "18px", margin: "6px" }} />
                                <span>Catalog</span>
                            </div>
                        </div>
                        {/* c1logo end */}

                        {/* c1logo start */}
                        <div className='c2logo'>
                            <div className='icon main-page'>
                                <IoIosGitCompare style={{ fontSize: "24px", margin: "6px" }} />
                                <span>Compare Product</span>
                            </div>
                            <AiOutlineArrowRight style={{ fontSize: "14px", marginLeft: "20%" }} />
                        </div>
                        {/* c1logo end */}

                        {/* c1logo start */}
                        <div className='c2logo'>
                            <div className='icon main-page'>
                                <AiOutlineHeart style={{ fontSize: "24px", margin: "6px" }} />
                                <span>Wish List - Empty</span>
                            </div>
                            <AiOutlineArrowRight style={{ fontSize: "14px", marginLeft: "20%" }} />
                        </div>
                        {/* c1logo end */}

                        {/* c1logo start */}
                        <div className='c2logo'>
                            <div className='icon main-page'>
                                <BsBagDash style={{ fontSize: "24px", margin: "6px" }} />
                                <span>2 Products - $1000</span>
                            </div>
                            <AiOutlineArrowRight style={{ fontSize: "14px", marginLeft: "20%" }} />
                        </div>
                        {/* c1logo end */}

                    </div>
                    {/* c1d1-2 end */}
                </div>
                {/* c1d1 end */}
            </div>
            {/* cont1 end */}
            <Outlet />
            </div>
            
        </>
    )
}
