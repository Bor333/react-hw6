import {FC} from "react";
import {useSelector} from "react-redux";
import {StoreState} from "src/store";
import {Navigate, Outlet} from "react-router-dom";

interface PublicRouteProps {
    component?: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({component}) => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);

    if (isAuth) {
        return <Navigate to="/"/>
    }
    return component ? component : <Outlet/>
};