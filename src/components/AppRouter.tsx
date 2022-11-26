import {Route, Routes} from "react-router-dom";
import {Header} from "components/Header";
import {Main} from "src/pages/Main";
import {AboutWithConnect} from "src/pages/About";
import {ChatList} from "components/ChatList";
import {ChatPage} from "src/pages/ChatPage";
import {FC, lazy} from "react";
import {Articles} from "src/pages/Articles";
import {SignIn} from "src/pages/SignIn";
import {PrivateRoute} from "components/PrivateRoute";
import {PublicRoute} from "components/PublicRoute";
// import {Profile} from "src/pages/Profile";


const Profile = lazy(() =>
    Promise.all([
        import('src/pages/Profile').then(({Profile}) => ({
            default: Profile,
        })),
        new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => (
   <Routes>
        <Route path="/" element={<Header/>}>
            <Route index element={<Main/>}/>
            <Route
                path="profile"
                element={<PrivateRoute component={<Profile/>}  />}
            />
            <Route path="about" element={<AboutWithConnect/>}/>
            <Route path="signin" element={<PublicRoute component={<SignIn/>}/> }/>
            <Route path="chats" element={<PrivateRoute/>}>
                <Route index element={<ChatList/>}/>
                <Route path=":chatId" element={<ChatPage/>}/>
            </Route>
            <Route path="articles" element={<Articles/>}/>
        </Route>
        <Route path="*" element={<div> 404 page </div>} />
    </Routes>
);