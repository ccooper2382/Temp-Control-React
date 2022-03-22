import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(15);
    let temperatureCSS = "border-solid border-4 text-white ";

    if (count === 15) {
        temperatureCSS += "bg-blue-900";
    }

    return (
        <div>
            <div className={temperatureCSS}>{count} C</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCount(count + 1)}>
                +
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default Counter;