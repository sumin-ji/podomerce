import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const List = styled.div`
    padding:1rem;
    display:flex;
    flex-direction: column;
    gap: 1.5rem;
`

const Item = styled.div`
    width: 100%;
    border-radius: 2rem;
    padding:0.3rem;
    display: flex;
    align-items: center;
    border:1px solid #9D64BA;
    background-color: white;
    
`

const Profile = styled.div`
    width: 5rem;
    height:5rem;
    border-radius: 50%;
    border: 5px solid lightgray;

    justify-content: center;
    align-items: center;
    overflow: hidden;

    img{
        width: 100%;
        height:100%;
        object-fit: cover;
    }
`

const Rank = styled.h1`
    color: brown;
    width: 20%;
    text-align: center;
`

const Name = styled.div`
    font-size: 2.5rem;
    width: 50%;
    margin-left: 1rem;
    color: black;
`
const Count = styled.div`
    font-size: 2rem;
    color: black;
`


const func = async () => {
    try {
        const data = await fetch('http://podomerce-api.loca.lt/chart').then(res => res.json());
        return data;
    } catch (e) {
        console.error(e);
    }
}

const Chart = () => {

    const [datas, setDatas] = useState([{ userId: 'sdfadsf', name: 'sumin', rank: '1', cnt: '1', image: '1' }])
    useEffect(() => {
        func().then(data => {
            console.log(data);
            setDatas(data);
        })
    }, [])

    return (
        <List>
            {datas.length > 0 && datas.map((d) =>
                <Link to={`/message/${d.userId}/${d.name}`}>
                    <Item key={d.name}>
                        <Rank>{d.rank}.</Rank>
                        <div><Profile><img src={d.image} /></Profile></div>
                        <Name>{d.name}</Name>
                        <Count>{d.cnt}알</Count>
                    </Item>
                </Link>
            )}
        </List>
    )
}

export default Chart