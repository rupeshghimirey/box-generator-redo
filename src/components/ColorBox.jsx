import react, { useState } from 'react';
import styles from "./ColorForm.module.css"
import React from 'react';


const ColorBox = () => {

    const [colorBoxInfo, setColorBoxInfo] = useState({
        color: "",
        //changes
        height: "",
        width: ""
        
    })

    const [listOfBoxColors, setListofBoxColors] = useState([])

    const changehandler = (e) => {
        console.log("typing in this input-->", e.target.name, e.target.value)
        //this is updating the formInfo state variable. Since the formInfo variable is an object, we use {} 
        setColorBoxInfo({
            ...colorBoxInfo, //this is saying make a copy of the colorInfo variable with all its existing key value pairs
            [e.target.name]: e.target.value //update the key-value pair that corresponds to the input that is being changed. the e.target.name will be whatever the name of the input is
        })
    }
    const submitColor = (e) => {
        e.preventDefault() 
        console.log("submitted the color!")
        setListofBoxColors([...listOfBoxColors, colorBoxInfo]);
        //
        setColorBoxInfo({color: "", height: "", width: ""})

    


    }
    return (
        <>
            <form onSubmit={submitColor}>
                <div className="form-group text-center mt-2 col-lg-6 offset-lg-3 mt-4">
                    <input className="form-control" type="text" placeholder="Please type the name of the color!" value = {colorBoxInfo.color} name="color" onChange={changehandler} />
                    
                    <input className="form-control" type="text" placeholder="Please type the name of the height!"  name="height" value = {colorBoxInfo.height} onChange={changehandler} />
                    
                    <input className="form-control" type="text" placeholder="Please type the name of the width!"  name="width" value = {colorBoxInfo.width} onChange={changehandler} />
                    {
                        colorBoxInfo.color.length < 3 && colorBoxInfo.color.length > 0 ?
                            <p className="text-danger">Please type the name of color!</p>
                            : ""
                    }
                </div>
                <div className="text-center mt-3"><input className="btn btn-primary" type="submit" value="Send Color" /></div>
            </form>
            <hr />

            <h2 class="text-center text-success mt-3"> List of colored Boxes!</h2>

            {
                listOfBoxColors.map((colorBox) => {
                    return (
                        // added height and width css
                        <div style = {{ backgroundColor: colorBox.color, height: colorBox.height+"px", width: colorBox.width+"px" }} className={styles.coloredBox}>
                            <p className="text-center text-align-center">{colorBox.color}</p>

                        </div>

                    )
                })
            }
        </>
    );
};

export default ColorBox;
