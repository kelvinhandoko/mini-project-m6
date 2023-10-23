import styled from "styled-components"
import { contactData } from "../data/data"
import ContactCard from "../component/contact/ContactCard"

const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    height: 100%;
    width: min(95%, 1400px);
    margin: 0 auto;
    gap: 4rem;
    align-items: center;
`

const Contact = () => {
    return (
        <Main>
            {contactData.map(({ Icon, type, url }, idx) => (
                <ContactCard Icon={Icon} type={type} url={url} key={idx} />
            ))}
        </Main>
    )
}

export default Contact
