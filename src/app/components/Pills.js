const Pills = ({ labels, handleClick}) => {
    return (
        <div className="ml-5 mb-5">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">
                    Tab
                </label>
                <select id="Tab" className="w-full rounded-md border-gray-200 text-slate-800">
                    {labels.map((label, index) => (
                        <option key={index} onClick={() => handleClick(label)}>{label.labels}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex gap-6" aria-label="Tabs">
                        {labels.map((label, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(label)}
                                className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${
                                    label.active
                                        ? "border-purple-400 text-purple-500"
                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                }`}
                            >
                                {label.labels}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pills;