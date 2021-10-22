import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jwt-decode";

import { pages } from "./utils/routes";

import Login from "./views/login/Login";
import Tasks from "./views/tasks/Tasks";
import NotFound from "./views/notFound";
import Home from "./views/home";
import Registration from "./views/registration";

import { loadProfile, setProfile} from "./store/authSlice";
import Team from "./views/team";

export const Routes = () => {
    try{
        const dispatch = useDispatch();
        const token = localStorage.getItem('accessToken');
        if(token){

            dispatch(loadProfile());
            const profile = jwt(token);
            token && true && dispatch(setProfile(profile));
        }
    }catch (err){
        console.log(err);
    }

    return (
        <Router>
            <Switch>
                <Route exact path={pages.HOME}>
                    <Home />
                </Route>
                <Route exact path={pages.LOGIN}>
                    <Login />
                </Route>
                <Route exact path={pages.REGISTRATION}>
                    <Registration />
                </Route>
                <ProtectedRoute exact path={pages.PROFILE}>
                    <Team />
                </ProtectedRoute>
                <ProtectedRoute exact path={pages.TASKS}>
                    <Tasks />
                </ProtectedRoute>
                {/* List a generic 404-Not Found route here */}
                <Route path ="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export const ProtectedRoute = ({ children, ...rest }) => {
    const accessToken = useSelector((state) => state.authSlice.accessToken);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: pages.LOGIN,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};


export default Routes;