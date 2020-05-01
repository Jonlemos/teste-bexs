import React from 'react';
import './Form.scss';

const inputs = [
    {
        title: 'Número do cartão',
        name: 'cardNumber',
        placeholder:'Número do cartão',
        error:'Número do cartão inválido'
    },
    {
        title: 'Nome (Igual ao cartão)',
        name: 'name',
        spellCheck: false,
        placeholder:'Nome (Igual ao cartão)',
        error:'Insira seu nome completo',
    },
];

export default ({ onChange, onBlur, onSubmit, onFocus, values, errors }) => (
    <form onSubmit={onSubmit} onFocus={onFocus}>
        {inputs.map(({ title, name, placeholder, error, ...props }, i) => (
            <div className={`field${errors[name] ? ' error' : ''}${(values[name] || '').length > 0 ? ' filled' : '' }`} key={i}>
                <label className="placeholder">{placeholder}</label>
                <input
                    {...props}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    type='text'
                    value={values[name] || ''}
                />
                <p className={`${errors[name] ? 'error' : ''}`}>{error}</p>
            </div>
        ))}

        <div className='row'>
            <div className={`field${errors['expires'] ? ' error' : '' }${(values['expires'] || '').length > 0 ? ' filled' : '' }`}>
                <label className="placeholder">Validade</label>
                <input
                    // placeholder="Validade"
                    onChange={onChange}
                    onBlur={onBlur}
                    name='expires'
                    type='text'
                    value={values['expires'] || ''}
                />
                <p className={`${errors['expires'] ? 'error' : ''}`}>Data Inválida</p>
            </div>
            <div className={`field${errors['cvv'] ? ' error' : ''}${(values['cvv'] || '').length > 0 ? ' filled' : '' }`}>
                <label className="placeholder">CVV</label>
                <input
                    // placeholder="CVV"
                    onChange={onChange}
                    onBlur={onBlur}
                    name='cvv'
                    type='text'
                    value={values['cvv'] || ''}
                />
                <p className={`${errors['cvv'] ? 'error' : ''}`}>Código Inválido</p>
            </div>
        </div>

        <div className="field">
            <select onChange={onChange} name="installmentValue" type="text" defaultValue="number">
                <option value="number" disabled hidden>Número de parcelas</option>
                <option className="option" value="12000">1x R$ 12.000,00</option>
                <option className="option" value="5000">6x R$ 5.000,00</option>
                <option className="option" value="1000">12x R$ 1.000,00</option>
            </select>
            <p>Insira o número de parcelas</p>
        </div>

        <button type="submit">Continuar</button>
    </form>
);