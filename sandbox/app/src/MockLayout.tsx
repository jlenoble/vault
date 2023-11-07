import { FunctionComponent, PropsWithChildren } from "react";
import { Spinner } from "./components";

export const CenteredSpinner = () => (
    <div className="grid h-full place-items-center">
        <Spinner />
    </div>
);

const Header = () => (
    <header className="h-20 w-full bg-blue-300">
        <CenteredSpinner />
    </header>
);
const Sidebar = () => (
    <aside className="h-full w-72 bg-orange-300/50">
        <CenteredSpinner />
        <CenteredSpinner />
        <CenteredSpinner />
        <CenteredSpinner />
        <CenteredSpinner />
        <CenteredSpinner />
    </aside>
);
const Main: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <main className="h-full w-full">{children || <CenteredSpinner />}</main>
);
const Body: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <div className="flex h-full w-full flex-row text-gray-800 dark:text-gray-200">
        <Sidebar />
        <Main>{children || <CenteredSpinner />}</Main>
        <Sidebar />
    </div>
);
const Footer = () => (
    <header className="h-20 w-full bg-blue-300">
        <CenteredSpinner />
    </header>
);

const MockLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <Body>{children || <CenteredSpinner />}</Body>
        <Footer />
    </>
);

export default MockLayout;
