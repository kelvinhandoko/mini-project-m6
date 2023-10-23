import Navbar from "../component/template/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../component/template/Footer"
import styled from "styled-components"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
`
const SharedLayout = () => {
    return (
        <Container>
            <Navbar />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default SharedLayout
