import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Selected_currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    // const [newCurrency, setNewCurrency] = useState('');
    const alertType = 'alert-success';

    const changeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className={`alert ${alertType}`}>
            <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option defaultValue value="£" name="£"> £ GBP</option>
                <option value="$" name="$">$ USD</option>
                <option value="¥" name="¥">¥ JPY</option>
                <option value="€" name="€">€ EUR</option>
                  </select>
        </div>
    )
}

export default Selected_currency;
