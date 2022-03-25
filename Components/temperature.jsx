

const Counter = ({setting, onIncrement, onDecrement}) => {

    let temperatureCSS = "border-solid border-4 text-white rounded-full w-28 h-28 align-middle flex justify-center items-center ml-auto mr-auto ";

    if (setting >= 15 && setting <= 20 ) {
        temperatureCSS += "bg-blue-900";
    }

    return (
        <div>
            <div className={temperatureCSS}>{setting} C</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  m-1"
                    onClick={onIncrement}>
                <span>+</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-full m-1"
                    onClick={onDecrement}>
                <span >-</span>
            </button>
        </div>
    );
}

export default Counter;