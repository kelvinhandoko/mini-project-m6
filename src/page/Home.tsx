import styled from "styled-components"
import lightAsset from "../assets/light.gif"

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
const Home = () => {
    return (
        <Main>
            <div>
                <h2>hello, My name is Kelvin</h2>
                <h3 style={{ textTransform: "capitalize" }}>
                    i am student at mikroskil university
                </h3>
            </div>
            <img src={lightAsset} height={450} />
        </Main>
    )
}
export default Home
