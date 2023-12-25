import React, { useState } from 'react';

const Tabs = ({ prop }) => {
    const [index, setIndex] = useState('');

    const Data = (idx) => setIndex(idx);

    return (
        <div>
            {prop.map((tab, idx) => (
                <button
                    style={{
                        margin: '10px',
                        ...(index === idx
                            ? { color: 'white', backgroundColor: 'black' }
                            : {}),
                    }}
                    onClick={(e) => Data(idx)}
                    key={idx}
                >
                    {tab.label}
                </button>
            ))}
            <p>{index === '' ? <p> </p> : <p>{prop[index].content}</p>}</p>
        </div>
    );
};

export default Tabs;
