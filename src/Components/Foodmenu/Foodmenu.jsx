import React, { useState } from 'react'
import './foodmenu.css'
import menuData from './menuData'
import breakfast from '../../assets/images/breakfast.png'
import dinner from '../../assets/images/dinner.png'
import lunch from '../../assets/images/lunch.png'



const Foodmenu=()=>{
    const [selectedType, setSelectedType] = useState("Breakfast");
  return (
    <div className="foodmenu">
        <div className="menu-head">
            <h3>----- Food Menu -----</h3>
            <h2>Most Popular Items</h2>
        </div>
        <div className="menu-opp">
        <div className='menu-opp1'>
        <p><img src={breakfast} alt="" />Popular</p>
        <p><img src={lunch} alt="" />Special</p>
        <p><img src={dinner} alt="" />Lovely</p>
        </div>
        <div className="menu-opp2">
        {Object.keys(menuData).map((type) => {
            return(
                  <button
                    key={type}
                    className={selectedType === type ? "active" : ""}
                    onClick={() => setSelectedType(type)}>
                    {type}
                  </button>
            )})}
        </div>
        </div>
        <div className="menu">
            <div className="menu1">
        {menuData[selectedType].slice(0,4).map((item, index) => (
        <div key={index} className="item">
            <img src={item.image} alt="" />
            <div className="item-inner">
            <div className="item-inner1">
                <h3>{item.name}</h3>
                <h2>{item.price}</h2>
            </div>
            <div className="item-inner2">
                <p>{item.discription}</p>
            </div>
            </div>
        </div>
        ))}
        </div>
        <div className="menu1">
        {menuData[selectedType].slice(4,8).map((item, index) => (
        <div key={index} className="item">
            <img src={item.image} alt="" />
            <div className="item-inner">
            <div className="item-inner1">
                <h3>{item.name}</h3>
                <h2>{item.price}</h2>
            </div>
            <div className="item-inner2">
                <p>{item.discription}</p>
            </div>
            </div>
        </div>
        ))}
        </div>
        </div>
    </div>
  )
}
export default Foodmenu;