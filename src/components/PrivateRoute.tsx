import {FC} from "react";
import {useSelector} from "react-redux";
import {StoreState} from "src/store";
import {Navigate, Outlet} from "react-router-dom";

interface PrivateRouteProps {
    component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({component}) => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);

    if (!isAuth) {
        return <Navigate to="/signin"/>
    }
    return component ? component : <Outlet/>
};