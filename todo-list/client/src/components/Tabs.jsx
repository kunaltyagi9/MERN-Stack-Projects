import React from 'react';

import { TABS } from '../redux/actions/types';
import { toggleTab } from '../redux/actions';

import { useDispatch } from 'react-redux';


const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab =>   
            <button
                key={tab}
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        )
    )
}

export default Tabs;