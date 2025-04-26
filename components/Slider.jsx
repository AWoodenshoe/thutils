function Slider({ value, onChange, min, max, disabled }) {
    return (
        <label className="flex items-center gap-2 w-full">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                disabled={disabled}
                step="5"
                onChange={(e) => onChange(Number(e.target.value))}
                className={`flex-grow appearance-none ${
                    disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            />
            <span className="text-sm w-16 text-left">
                {value} {value === 1 ? "minute" : "minutes"}
            </span>
        </label>
    );
}

export default Slider;

/*

// in Slider.css

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    border-radius: 9999px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 9999px;
    transition: transform 0.2s;
}

input[type="range"]:hover::-webkit-slider-thumb {
    cursor: pointer;
}


*/
