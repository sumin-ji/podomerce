import styled from 'styled-components';
// import { useEffect, useState } from 'react';
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


// const func = async () => {
//     try {
//         const data = await fetch('http://podomerce-api.loca.lt/chart').then(res => res.json());
//         return data;
//     } catch (e) {
//         console.error(e);
//     }
// }


const datas = [
    {userId:'1',name:'지수민',rank:'1',cnt:'8',image:'https://ca.slack-edge.com/TG9C7MDEY-U05EA92TT7B-bcbeb1dcf4e3-512'},
    {userId:'2',name:'유근수',rank:'2',cnt:'5',image:'https://ca.slack-edge.com/TG9C7MDEY-U03CH34TSGY-d6b6a6ad33eb-512'},
    {userId:'3',name:'오상아',rank:'3',cnt:'4',image:'https://ca.slack-edge.com/TG9C7MDEY-U03LCF1BG4D-6bc981c39711-512'},
    {userId:'4',name:'이하연',rank:'4',cnt:'2',image:'https://ca.slack-edge.com/TG9C7MDEY-U03REDET5FF-524fe8f533fc-512'},
]

const Chart = () => {

    // const [datas, setDatas] = useState([{ userId: 'sdfadsf', name: 'sumin', rank: '1', cnt: '1', image: '1' }])
    // useEffect(() => {
    //     func().then(data => {
    //         console.log(data);
    //         setDatas(data);
    //     })
    // }, [])

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