// Project.js
import React, { useState } from 'react';
import "./Project.css";
import InsideProjectPage from './InsideProjectPage/InsideProjectPage';

const Project = () => {
    const Item = [
        {
            serial_no: "1",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "2",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "3",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "4",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "5",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "6",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "7",
            name: "Jonathan James",
            text: "Interior",
        },
        {
            serial_no: "8",
            name: "Jonathan James",
            text: "Interior",
        },
    ];
    const [click, setClick] = useState(false);

    const handleCardClick = () => {
        setClick(true);
    };

    const handleInsideProjectClose = () => {
        setClick(false);
    };

    return (
        <div>
            {!click ? (
                <div>
                    {Item.map((item) => (
                        <div
                            className='project-card'
                            key={item.serial_no}
                            onClick={handleCardClick}
                        >
                            <div className='project-card-left'>
                                <div className='project-card-left-text'>{item.name}</div>
                            </div>
                            <div className='project-card-right'>
                                <div className='project-card-right-text'>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <InsideProjectPage onClose={handleInsideProjectClose} />
            )}
        </div>
    );
};

export default Project;
