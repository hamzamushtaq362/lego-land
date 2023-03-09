import React,{useState} from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import RightSide from './RightSide';
import Range from './Range';

export default function LeftSide() {
    const [range,setRange]=useState('');
    const [ageCheck, setAgeCheck] = useState({ UpTo: false, oneTwo: false, threeFive: false, sixTen: false, Older: false });
    function handleCallback(childData){
        setRange(childData)
    }

    function handleChange(e){
        console.log("handle Form Values")
        const { name, value } = e.target;
        console.log("name",name);
        console.log("value",value);
        setAgeCheck(prevState => ({
                ...prevState,
                [name]: value == "false" ? true: false
            }));
    }
    return (
        <>
            <div className='cont2'>
                <div className='c2d1'>
                    <div className='c2-price'>
                        <p style={{
                            margin: "20px 0px",
                            fontWeight: "bold"
                        }}>Price</p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{
                                height: "40px",
                                width: "48%",
                                border: "1px solid black",
                                padding: "10px 0px"
                            }}>
                                <p style={{
                                    marginLeft: "10px",
                                    fontSize: "12px"
                                }}>From - {range[0]}</p>
                            </div>
                            <div style={{
                                height: "40px",
                                width: "48%",
                                border: "1px solid black",
                                padding: "10px 0px"
                            }}>
                                <p style={{
                                    marginLeft: "10px",
                                    fontSize: "12px"
                                }}>Up to - {range[1]}</p>
                            </div>
                        </div>
                        {/* <input style={{
                            width: "100%",
                            accentColor: "#f44336",
                            height: "4px"
                        }}
                            type="range" id="vol" name="vol" min="0" max="50" /> */}

                        <br />
                        <Range getData={handleCallback} />

                        {
                            console.log("range",range)
                        }

                        <hr style={{ marginTop: "15px" }} />

                        <p style={{
                            margin: "15px 0px",
                            fontWeight: "bold"
                        }}>Theme</p>

                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Space" />
                        <label htmlFor="vehicle1"> Space</label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Ninjas" />
                        <label htmlFor="vehicle2"> Ninjas</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Transports" />
                        <label htmlFor="vehicle3"> Transports</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Buildings" />
                        <label htmlFor="vehicle3"> Buildings</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Homes" />
                        <label htmlFor="vehicle3"> Homes</label><br />

                        <hr style={{ marginTop: "15px" }} />

                        <p style={{
                            margin: "15px 0px",
                            fontWeight: "bold"
                        }}>Age</p>

                        <input 
                        type="checkbox" 
                        id="UpTo" 
                        name="UpTo" 
                        value={ageCheck.UpTo}
                        onChange={handleChange}
                        />
                        <label htmlFor="vehicle1"> Up to a year</label><br />
                        <input 
                        type="checkbox" 
                        id="oneTwo" 
                        name="oneTwo" 
                        value={ageCheck.oneTwo}
                        onChange={handleChange}
                        />
                        <label htmlFor="vehicle2"> 1 year - 2 year</label><br />
                        <input 
                        type="checkbox" 
                        id="threeFive" 
                        name="threeFive" 
                        value={ageCheck.threeFive}
                        onChange={handleChange}
                        />
                        <label htmlFor="vehicle3"> 3 year - 5 year</label><br />
                        <input 
                        type="checkbox" 
                        id="sixTen" 
                        name="sixTen" 
                        value={ageCheck.sixTen}
                        onChange={handleChange}
                        />
                        <label htmlFor="vehicle3"> 6 year - 10 year</label><br />
                        <input 
                        type="checkbox" 
                        id="Older" 
                        name="Older" 
                        value={ageCheck.Older}
                        onChange={handleChange}
                        />
                        <label htmlFor="vehicle3"> Older than 12 years</label><br />

                        {
                            console.log("ageCheck",ageCheck)
                        }

                        <hr style={{ marginTop: "15px" }} />

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "40px",
                            width: "100%"
                        }}>
                            <p style={{
                                fontWeight: "bold"
                            }}>Brand</p>
                            <AiOutlineDown />
                        </div>
                        <hr style={{ marginTop: "5px" }} />

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "40px",
                            width: "100%"
                        }}>
                            <p style={{
                                fontWeight: "bold"
                            }}>Characters</p>
                            <AiOutlineDown />
                        </div>
                        <hr style={{ marginTop: "5px" }} />

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "40px",
                            width: "100%"
                        }}>
                            <p style={{
                                fontWeight: "bold"
                            }}>Stock Avaliablilty</p>
                            <AiOutlineDown />
                        </div>
                        <hr style={{ marginTop: "5px",marginBottom: "20px" }} />

                        <div style={{ 
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                         }}>
                        <button style={{ 
                            padding: "10px 20px",
                            color: "white",
                            backgroundColor: "red",
                            borderRadius: "4px",
                            borderColor: "red"
                         }} >APPLY FILTER</button>

                         <AiOutlineDelete style={{ 
                            fontSize: "24px",
                            marginLeft: "32%"
                            }} />
                        </div>
                    </div>
                </div>
                {/* c2d2 */}
                <RightSide />
            </div>
        </>
    )
}
