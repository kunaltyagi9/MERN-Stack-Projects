import { createContext, useState } from 'react';
import { VIEWS } from '../constants/constant';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [view, setView] = useState(VIEWS.inbox);

    return (
        <DataContext.Provider value={{
            view,
            setView
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;