import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import App from "../../App";

export default function Layout(): JSX.Element {

    return (
        <>
            <AppHeader />
            <AppSidebar />
            <App />
        </>
    );
}
