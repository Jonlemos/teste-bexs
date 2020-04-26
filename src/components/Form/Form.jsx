import React from 'react';
import './Form.scss';

const inputs = [
    {
        title: 'Número do cartão',
        name: 'cardNumber',
    },
    {
        title: 'Nome (Igual ao cartão)',
        name: 'name',
        spellCheck: false,
    },
    {
        title: 'Validade',
        name: 'expires',
    },
    {
        title: 'CVV',
        name: 'cvv',
    },
];

export default ({ onChange, onBlur, onSubmit, onFocus, values, errors }) => (
    <form onSubmit={onSubmit} onFocus={onFocus}>
        {inputs.map(({ title, name, ...props }, i) => (
            <div className={`field${errors[name] ? ' error' : ''}`} key={i}>
                <label htmlFor={name}>{title}</label>
                <input
                    {...props}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    type='text'
                    value={values[name] || ''}
                />
            </div>
        ))}

        <div className="field">
            <label htmlFor="installmentValue">Parcelas</label>
            <select onChange={onChange} name="installmentValue" type="text" defaultValue="number">
                <option value="number" disabled hidden>Número de parcelas</option>
                <option value="12000">1x R$ 12.000,00</option>
                <option value="5000">6x R$ 5.000,00</option>
                <option value="1000">12x R$ 1.000,00</option>
            </select>
        </div>

        <button type="submit">Continuar</button>
    </form>
);