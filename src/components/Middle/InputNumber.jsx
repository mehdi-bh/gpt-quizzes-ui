import { useState } from 'react';
function InputNumber(){
    const [value, setValue] = useState(0);

    function handleIncrement() {
        setValue(value + 1);
    }

    function handleDecrement() {
        setValue(value - 1);
    }

    return (
        <div className="flex justify-center p-5">
            <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l"
                onClick={handleDecrement}
            >
                -
            </button>
            <input
                type="text"
                value={value}
                className="px-4 w-14 py-2"
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r"
                onClick={handleIncrement}
            >
                +
            </button>
        </div>
    );
}

export default InputNumber;