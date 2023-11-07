import { useRouteError } from "react-router-dom";
import type { ErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className=" my-96 grid h-full place-items-center text-lg text-gray-800 dark:text-gray-200">
            <h1 className="text-6xl text-gray-500">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className=" text-gray-500">
                    {(error as ErrorResponse).statusText || (error as Error).message}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
