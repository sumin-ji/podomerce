import styled from 'styled-components';
import Podo from '../../components/Podo';
import Chart from '../../components/Chart';

const Title = styled.div`
    text-align: center;
    font-size: 5rem;
`

const Home = () => {
    return <div>
        <Title>"주간 포도나무 현황"</Title>
        <Podo />
        <Chart />

    </div>
}

export default Home;