import { NavLink, Outlet } from "react-router";
import Container from "../components/Container";
import Text from "../components/Text";
import Header from "../core-components/Header";
import MainContent from "../core-components/MainContent";
import Footer from "../core-components/Footer";

export default function LayoutMain(){
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}