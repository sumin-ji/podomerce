// import { useEffect, useState } from 'react';
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

const datas=[
    {message:"지수민: api 연결 오류나는데, 잘 찾아주셔서 포도합니다! 🍇"},
    {message:"오상아: 진짜 다재다능. 개발도 도와주시고 피피티도 짱짱짱! 🍇🍇🍇"},
    {message:"오상아: 아이디어 뱅크 상아님 덕분에 일사천리하게 포도머스가 탄생!!! 🍇"},
    {message:"이하연: 포도그림도 너무 예쁘고~ 옆에서 도와주셔서 너무 감사해요~~~~ 🍇"},
    {message:"이하연: 하연님 최고~~~ 🍇"},
]

const Message = () => {
    const { name } = useParams();

    // const func = async () => {
    //     try {
    //         const data = await fetch(`http://podomerce-api.loca.lt/message/${id}`).then(res => res.json());
    //         return data;
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }


    // const [datas, setDatas] = useState();
    // useEffect(() => {
    //     func().then(data => {
    //         console.log(data);
    //         setDatas(data);
    //     })
    // }, [])

    return <Component>
        <Header>💌 {name}님이 보낸 칭찬 메세지 💌</Header>
        {datas && datas.map(data => <Cart>{data.message}</Cart>)}</Component>
}

export default Message;