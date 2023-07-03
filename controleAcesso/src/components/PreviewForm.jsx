import React, { useState } from 'react';


    function PreviewForm() {
        const [inputs, setInputs] = useState([]);

        const addInput = () => {
            setInputs([...inputs, '']);
        };

        const handleInputChange = (index, value) => {
            const updatedInputs = [...inputs];
            updatedInputs[index] = value;
            setInputs(updatedInputs);
        };

        return (
            <div>
                <h2>Input List</h2>
                <button onClick={addInput}>Adicionar Input</button>
                {inputs.map((value, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    export default PreviewForm;
