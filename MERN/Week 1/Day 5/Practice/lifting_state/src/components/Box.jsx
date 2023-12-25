import { useState } from 'react'

const Box = ({ box }) => {
    return (
        <div>
            {box.map((oneBox, idx) => (
                <div
                    key={idx}
                    style={{
                        height: oneBox.height ,
                        width: oneBox.width,
                        backgroundColor: oneBox.color 
                    }}>
                </div>
            ))}

        </div>
    )
}

export default Box