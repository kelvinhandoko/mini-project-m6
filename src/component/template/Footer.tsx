import styled from "styled-components"
const FooterEl = styled.footer`
    background: ${({ theme }) => theme.secondary};
    padding: 2rem;
`
const Footer = () => {
    return (
        <FooterEl>
            <p style={{ textTransform: "capitalize", fontWeight: "bold", textAlign: "center" }}>
                &copy; Created by Kelvin | mini project 2 submission
            </p>
        </FooterEl>
    )
}

export default Footer
