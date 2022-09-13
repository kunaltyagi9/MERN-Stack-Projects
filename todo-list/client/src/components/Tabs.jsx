
import { TABS } from "../redux/actions/type";

import { useDispatch } from 'react-redux';

import { toggleTab } from "../redux/actions";


const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;