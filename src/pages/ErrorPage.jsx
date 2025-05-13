import { useRouteError,NavLink } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div >
            <h1>Sorry, an unexpected error has occurred.</h1>
            {error && <p> {error.data} </p>}
            <NavLink to="/">
            <button> Go Home </button>
            </NavLink>
        </div>
    );
};