import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    gap:1rem;
    flex-direction: column;
`

const Cart = styled.div`
    padding:1rem;
    border-radius: 1rem;
    font-size: 2rem;
    background-color: #fbd9fd;
`

const Header = styled.h1`
    text-align: center;
`

const Message = () => {
    const { id, name } = useParams();

    const func = async () => {
        try {
            const data = await fetch(`http://podomerce-api.loca.lt/message/${id}`).then(res => res.json());
            return data;
        } catch (e) {
            console.error(e);
        }
    }


    const [datas, setDatas] = useState();
    useEffect(() => {
        func().then(data => {
            console.log(data);
            setDatas(data);
        })
    }, [])

    return <Component>
        <Header>💌 {name}님이 보낸 칭찬 메세지 💌</Header>
        {datas && datas.map(data => <Cart>{data.message}</Cart>)}</Component>
}

export default Message;