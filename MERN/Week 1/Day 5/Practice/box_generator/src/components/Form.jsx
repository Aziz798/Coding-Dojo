import { useState } from 'react';

const Form = ({ boxState,box }) => {
    const [newBox, setNewBox] = useState({
        height: '',
        width: '',
        color: '',
    });

    const formHandler = (e) => {
        e.preventDefault();
        
        boxState([...box, newBox]);
        setNewBox({ height: '', width: '', color: '' });
    };

    return (
        <div>
            <form onSubmit={formHandler}>
                <label>Height:</label>
                <input
                    type="number"
                    value={newBox.height}
                    onChange={(e) => setNewBox({ ...newBox, height: e.target.value })}
                />
                <label>Width:</label>
                <input
                    type="number"
                    value={newBox.width}
                    onChange={(e) => setNewBox({ ...newBox, width: e.target.value })}
                />
                <label>Color: </label>
                <input
                    type="color"
                    value={newBox.color}
                    onChange={(e) => setNewBox({ ...newBox, color: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Form;
