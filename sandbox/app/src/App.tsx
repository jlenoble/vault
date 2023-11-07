import { Spinner } from "./components";

const CenteredSpinner = () => (
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
const Main = () => (
    <main className="h-full w-full">
        <CenteredSpinner />
    </main>
);
const Body = () => (
    <div className="flex h-full w-full flex-row text-gray-700 dark:text-gray-200">
        <Sidebar />
        <Main />
        <Sidebar />
    </div>
);
const Footer = () => (
    <header className="h-20 w-full bg-blue-300">
        <CenteredSpinner />
    </header>
);

function App() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

export default App;
