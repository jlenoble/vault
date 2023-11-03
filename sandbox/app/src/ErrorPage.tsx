import { useRouteError } from "react-router-dom";
import type { ErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as ErrorResponse).statusText || (error as Error).message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;