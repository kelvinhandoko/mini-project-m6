import { FC } from "react"
import { Contact } from "../../data/data"
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

export const animate = keyframes`
     from {
        transform: translateX(-10%) scale(.6);
        opacity:0
        
    }
    to {
        transform: translate(0) scale(1);
       opacity:1

    }
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    border-radius: 16px;
    border: 2px solid #121212;
    box-shadow: 4px 4px #121212;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px #121212;
    }
    animation: ${animate} 0.5s forwards;
`

const ContactCard: FC<Contact> = ({ Icon, type, url }) => {
    return (
        <Link to={url} referrerPolicy="no-referrer" target="_blank">
            <CardContainer>
                <Icon fontSize="32px" />
                {type}
            </CardContainer>
        </Link>
    )
}

export default ContactCard
