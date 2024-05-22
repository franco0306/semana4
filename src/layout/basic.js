import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header />
                <div className="container-fluid" style={{ backgroundColor: '#F5F1ED' }}> {/* Cambiando el color de fondo a #E5FCFF */}
                    <div className="row py-5">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;
