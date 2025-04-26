function Toggle({ checked, onChange }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transform transition-transform peer-checked:translate-x-full"></div>
        </label>
    );
}

export default Toggle;
