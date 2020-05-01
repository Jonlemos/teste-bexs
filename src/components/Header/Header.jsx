import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold, mdiChevronRight } from '@mdi/js';
import './Header.scss';


export default () => (
    <header className="header">
        <p><span className="progress-indicator checked"><Icon path={mdiCheckBold} size={0.7} color="#ffffff"/></span>Carrinho</p>
        <Icon path={mdiChevronRight} size={1} color="#DE4B4B"/>
        <p><span className="progress-indicator">2</span>Pagamento</p>
        <Icon path={mdiChevronRight} size={1} color="#DE4B4B"/>
        <p><span className="progress-indicator">3</span>Confirmação</p>
    </header>
)