import React, {FC, Suspense,  useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Main} from './pages/Main';
import {ChatList} from 'components/ChatList';
import {ChatPage} from './pages/ChatPage';
import {Header} from 'components/Header';
import {ThemeContext} from './utils/ThemeContext';
import {Provider} from 'react-redux';
import {store} from './store';
import {AboutWithConnect} from './pages/About';


const Profile = React.lazy(() =>
    Promise.all([
        import('./pages/Profile').then(({Profile}) => ({
            default: Profile,
        })),
        new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExport]) => moduleExport)
);

export const App: FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Header/>}>
                            <Route index element={<Main/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="about" element={<AboutWithConnect/>}/>
                            <Route path="chats">
                                <Route
                                    index
                                    element={<ChatList />
                                    }
                                />
                                <Route
                                    path=":chatId"
                                    element={ <ChatPage /> }
                                />
                            </Route>
                        </Route>
                        <Route path="*" element={<div>404 page</div>}/>
                    </Routes>
                </Suspense>
            </ThemeContext.Provider>
        </Provider>
    );
};
