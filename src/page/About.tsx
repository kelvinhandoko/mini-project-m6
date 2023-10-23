import styled from "styled-components"
import { aboutData } from "../data/data"
import Card, { CardContent, CardHeader, CardItem } from "../component/about/Card"

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 4rem;
    flex-wrap: wrap;
`

const About = () => {
    return (
        <Main>
            <Card>
                <CardHeader>personal profile</CardHeader>
                <CardContent>
                    {Object.entries(aboutData.personalData).map(([key, value]) => (
                        <CardItem key={key}>
                            {key} : {value}
                        </CardItem>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>education</CardHeader>
                <CardContent>
                    {Object.entries(aboutData.education).map(([key, value]) => (
                        <CardItem key={key}>
                            {key} : {value}
                        </CardItem>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>skill</CardHeader>
                <CardContent>
                    {aboutData.skill.map((skill, index) => (
                        <CardItem key={index}>{skill}</CardItem>
                    ))}
                </CardContent>
            </Card>
        </Main>
    )
}

export default About
