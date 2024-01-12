// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Leaf from '../assets/leaf.png'

const Component = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;   
    text-align: center;
    font-size: 2rem;
`

const First = styled.div`
    width: 9rem;
    height:9rem;
    border-radius: 50%;
    border:6px solid #D7B9F2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D64BA;
    margin: 0 1rem;
    color: white;
`
const Second = styled.div`
    width: 7rem;
    height:7rem;
    border-radius: 50%;
    border:6px solid #D7B9F2;;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D64BA;
    color: white;
`
const Third = styled.div`
    width: 6rem;
    height:6rem;
    border-radius: 50%;
    border:6px solid #D7B9F2;;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9D64BA;
    color: white;
`

const LeafImage = styled.div`
    height: 8rem;
    width: 100%;
    position: relative;
    z-index: -1;


    img {
        position: absolute;
        width: 100%;
        left:0;
        right:0;

    }
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
    {name:'지수민',rank:"1",cnt:"8",image:"https://ca.slack-edge.com/TG9C7MDEY-U05EA92TT7B-bcbeb1dcf4e3-512"},
    {name:'유근수',rank:"2",cnt:"5",image:"https://ca.slack-edge.com/TG9C7MDEY-U05EA92TT7B-bcbeb1dcf4e3-512"},
    {name:'오상아',rank:"3",cnt:"4",image:"https://ca.slack-edge.com/TG9C7MDEY-U05EA92TT7B-bcbeb1dcf4e3-512"},
    {name:'이하연',rank:"4",cnt:"2",image:"https://ca.slack-edge.com/TG9C7MDEY-U05EA92TT7B-bcbeb1dcf4e3-512"},
]


const Podo = () => {
    // const [datas, setDatas] = useState<Array<{ name: string, rank: string, cnt: string, image: string }>>([])
    // useEffect(() => {
    //     func().then(data => {
    //         console.log(data);
    //         setDatas(data);
    //     })
    // }, [])

    return (
        <div>
            <LeafImage><img src={Leaf} /></LeafImage>
            {datas.length > 0 &&
                (<Component>
                    <div onClick={() => { }}>
                        <Second>{datas[1].name}</Second>
                        <div>2등</div>
                    </div>
                    <div>

                        <First>{datas[0].name}</First>
                        <div>1등</div>
                    </div>
                    <div>
                        <Third>{datas[2].name}</Third>
                        <div>3등</div>
                    </div>
                </Component>)
            }
        </div>

    )
}


export default Podo;