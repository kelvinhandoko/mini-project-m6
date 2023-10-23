import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = styled.nav`
    background: ${({ theme }) => theme.secondary};
    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Ul = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
`

const Navbar = () => {
    const Navli = styled(NavLink)`
        font-weight: 600;
        text-decoration: none;
        font-size: larger;
        transition: color 0.5s;
        &:hover {
            color: ${({ theme }) => theme.accent};
        }
        &.active {
            color: ${({ theme }) => theme.accent} !important;
        }
    `
    return (
        <Header>
            <h1>kelvin.</h1>
            <Ul>
                <Navli
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/"
                >
                    home
                </Navli>
                <Navli
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/about"
                >
                    about
                </Navli>
                <Navli
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/contact"
                >
                    Contact
                </Navli>
            </Ul>
        </Header>
    )
}

export default Navbar
