const [inputValue, setInputValue] = useState(budget);

    const handleChange = (event) => {
        const value = event.target.value;
        if (value <= 20000) {
            setInputValue(value);
        }
    };

    return (
        <div className="alert alert-secondary">
            <form>
                Budget: $ {inputValue}
                <input type="number" value={inputValue} onChange={handleChange} max="20000" />
            </form>
        </div>
    );
};

export default Budget;
