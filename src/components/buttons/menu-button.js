import React from 'react';
import './menu-button.css';

const MenuBtn = (props) => {
    const {item, current} = props;
    return (
        <button className={`btn-container ${item.id == current && 'active'}`} {...props} >
            <div className='btn-image'>
                <img src={item.img} alt={item.name}/>
            </div>
            <p className='btn-text'>
                {item.name}
            </p>
        </button>
    );
};

export default MenuBtn;