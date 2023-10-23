import { FC, ReactNode } from "react"
import styled from "styled-components"
import { animate } from "../contact/ContactCard"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 2px solid #121212;
    box-shadow: 4px 4px #121212;
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px #121212;
    }
    animation: ${animate} 0.5s normal;
`

export const CardHeader = styled.div`
    background-color: ${({ theme }) => theme.accent};
    color: white;
    padding: 1rem;
    text-align: center;
    font-weight: 700;
`

export const CardContent = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    padding: 1rem;
    list-style-position: inside;
    min-height: 200px;
    aspect-ratio: 1;
`
export const CardItem = styled.li`
    padding: 0.2rem;
`

interface IProps {
    children: ReactNode
}

const Card: FC<IProps> = ({ children }) => {
    return <CardContainer>{children}</CardContainer>
}
export default Card
