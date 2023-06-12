import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <form>
                Budget: $ <input type='number' value={budget} max='20000'/>
            </form>

        </div>
    );
};
export default Budget;
