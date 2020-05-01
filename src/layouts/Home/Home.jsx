import React, { useState } from 'react';
import { Form, CreditCard, Header  } from '../../components';
import './Home.scss'
import logo from '../../assets/img/cardLogo.svg'
import Icon from '@mdi/react';
import {mdiChevronLeft} from '@mdi/js';
export default () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [cardFlipped, setCardFlipped] = useState(false);
    
    const handleFormChange = ({ target: { name, value } }) => {
        if (name === 'cardNumber') {
            value = validate(value, 16) ? value : inputs[name];
        } else if (name === 'expires') {

            if (!validate(value, 4)) {
                value = inputs[name];   
            }

            if (!/^(0[1-9]|1[0-2])([0-9]{2})$/.test(value)) {
                setErrors(errors => ({ ...errors, [name]: true }));
            } else {
                const expires = new Date('20' + value.substring(2, value.length), value.substring(0, 2));
                setErrors(errors => ({ ...errors, [name]: expires < Date.now() }));
            }

        } else if (name === 'cvv') {
            value = validate(value, 3) ? value : inputs[name];
        } else if (name === 'name') {
            value = (value.length <= 24 ? value : inputs[name]).toUpperCase();
        }
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleFormFocus = ({ target: { name } }) => {
        setCardFlipped(name === 'cvv');
        // name === 'cardNumber' && setErrors(errors => ({ ...errors, [name]: false }));
        // name === 'expires' && setErrors(errors => ({ ...errors, [name]: false }));
        // name === 'cvv' && setErrors(errors => ({ ...errors, [name]: false }));
        // name === 'name' && setErrors(errors => ({ ...errors, [name]: false }));
        setErrors(errors => ({ ...errors, [name]: false }));
    }

    const handleFormBlur = ({ target: { name, value }}) => {
        name === 'cardNumber' && setErrors(errors => ({ ...errors, [name]: value.length < 16 }));
        name === 'expires' && setErrors(errors => ({ ...errors, [name]: value.length < 4 || errors[name] }));
        name === 'cvv' && setErrors(errors => ({ ...errors, [name]: value.length < 3 }));
        name === 'name' && setErrors(errors => ({...errors, [name]: value.split(' ').length <= 1 }));
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(inputs);
    }

    const validate = (value, maxLength) => (
        value.length <= maxLength && /^[0-9]*$/g.test(value)
    );

    return (
        <section className="layout home">
            <div className="left-container">
                <div className="title-credit">
                    <p><Icon className="leficonM" path={mdiChevronLeft} size={1} color="#fff"/> 
                    <span className="title-high">Alterar forma de pagamento</span><span className="title-small">Etapa 2 de 3</span>
                    </p>
                    <div>
                        <img src={logo} />
                        <p>Adicione um novo cartão de crédito</p>
                    </div>
                   
                </div>
                
                <CreditCard values={inputs} flipped={cardFlipped}/>
            </div>
            
            <div className="right-container">
                <Header />
                <Form
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    onFocus={handleFormFocus}
                    onSubmit={handleFormSubmit}
                    values={inputs}
                    errors={errors}
                />

            </div>
            
            
        </section>
    );
}