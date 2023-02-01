import React, {useEffect, useRef, useState} from "react";
import '../style.css';
import {FullPage, Slide} from 'react-full-page';
import styled, {css} from "styled-components";
import Col from "../components/Layout/Col";
import Paddler from "../components/Layout/Paddler";
import {AiFillCaretRight, AiOutlineArrowDown} from "react-icons/ai";
import group2 from '../resource/images/group/group1.jpeg';
import group3 from '../resource/images/group/group2.jpeg';
import group4 from '../resource/images/group/group3.jpeg';
import group5 from '../resource/images/group/group4.jpeg';
import group1 from '../resource/images/group/group5.jpeg';

const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
`

const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const Arrow = styled(AiFillCaretRight)`
  z-index: 1000;
  color: grey;
  font-size: 80px;
  padding-right: 50px;
  ${({left}) => left && css`
    transform: rotate(0.5turn);
    padding-left: 50px;
  `}
  
  :hover {
    color: white;
  }
`

const PhotoContainer = styled.div`
  display: flex;
  background-image: url(${({photoArr, photoNum}) => photoArr[photoNum]});
  //height: calc(100vh - 60px);
  height: 100vh;
  width: 100vw;
  // PhotoContainer 컴포넌트를 최상단으로 지정하고 min-height를 지정하면 
  // 자식 요소인 GropuImg 컴포넌트의 이미지 크기가 어느정도인지 확정을 못하기에 object-fit이
  // 제대로 작동하지 않는다.그렇기에 최상단에 Wrrraper 컴포넌트를 만들고 min-height를 준 다음
  // Wrrpaer의 자식 요소인 Container에 img에 크기를 지정시켜 줄 수 있는 고정 height 값 100vh를 준다.
  // https://taenami.tistory.com/49
  background-position: center;
  background-size: cover;
  transition: 0.3s ease-in-out;
`

const TransparencyContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  backdrop-filter: blur(8px);
`

const ImgText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 85%;
  font-size: 40px;
  font-family: 'Noto Serif KR', serif;
  color: rgba(255, 255, 255, 0.9);
  padding-bottom: 40px;
  z-index: 100;
`;

const GroupImg = styled.img`
  width: 80%;
  height: 95%;
  object-fit: contain;
`;

const DummyBox = styled.div`
  height: 1vh;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 40px;
  opacity: 0;
  padding-top: 30px;
  transition: 2.5s ease-in-out;
  border-bottom: 1px solid #414141;
`;

const BottomTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  font-family: 'Leferi Point', serif;
  width: 500px;
  white-space: nowrap;
  transition: 5s ease-in-out;
  overflow: hidden;
  border-right: 4px solid #212121;
`

const Home = () => {
    const [photoNum, setPhotoNum] = useState(0);
    const scrollMiddleTextRef = useRef([]);
    const scrollBottomNavRef = useRef(null);
    const bottomTextRef = useRef(null);
    const photoArr = [group1, group2, group3, group4, group5];
    const middleTextArr = ['안녕하세요 우리는', '축구를 좋아합니다.', '손흥민을 억까합니다', '뉴캐슬을 혐오합니다', '첼시가 질 때마다 행복합니다.']

    useEffect(() => {
        if (photoNum === 5) setPhotoNum(0);
        if (photoNum === -1) setPhotoNum(4);
    }, [photoNum]);
    // Arrow 컴포넌트 안의 있는 onClick 함수에 useEffect 안에 있는 if문을 넣어줄려 했지만
    // 제대로 작동하지 않았다. 아무래도 useState가 비동기적으로 작동하다보니 if문 안의 state가
    // 제대로 작동하지 않았나 싶다. 그렇기에 useEffect를 통해 if문을 감지하게끔 설정했다.


    useEffect(() => {
        const observer = new IntersectionObserver((entries, observe) => {
                console.log(entries[0].isIntersecting);
                entries[0].isIntersecting === true ?
                    bottomTextRef.current.classList.add('bottomTextAnimationTrigger') :
                    bottomTextRef.current.classList.remove('bottomTextAnimationTrigger');
            })
        ;
        observer.observe(scrollBottomNavRef.current);
    }, [scrollBottomNavRef, bottomTextRef]);
    // window.addEventListener의 scroll 이벤트로 scrollY 값을 받아오는 대신 IntersectionObserver을 사용한 이유
    // https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/
    // https://www.youtube.com/watch?v=e4Afka5IOZ8

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observe) => {
            entries.forEach(el => {
                el.isIntersecting ? el.target.style.opacity = 1 : el.target.style.opacity = 0;
            });
        });
        scrollMiddleTextRef.current.forEach(el => observer.observe(el));
    }, [scrollMiddleTextRef]);

    return (
        <Wrraper>
            <FullPage>
                <Slide>
                    <PhotoContainer photoNum={photoNum} photoArr={photoArr}>
                        {/*<Header background={'none'} position textColor={'white'}/>*/}
                        {photoNum === 0 && <ImgText>'그 날, 우리의 풋살은 시작되었다'</ImgText>}
                        <ImgText style={{top: 110}}>
                            <AiOutlineArrowDown style={{color: 'black'}}/>
                        </ImgText>
                        <ArrowContainer>
                            <Arrow left={true} onClick={() => setPhotoNum(photoNum - 1)}/>
                            <Arrow onClick={() => setPhotoNum(photoNum + 1)}/>
                        </ArrowContainer>
                        <ImgContainer>
                            <GroupImg src={photoArr[photoNum]} alt={photoArr[photoNum]}/>
                        </ImgContainer>
                        <TransparencyContainer/>
                    </PhotoContainer>
                </Slide>
                <Slide>
                    <TitleContainer>
                        <Paddler bottom={30}>
                            <Col gap={30} justify={'center'} align={'center'}>
                                {middleTextArr.map((val, i) =>
                                    <Title ref={el => scrollMiddleTextRef.current[i] = el}> {val} </Title>
                                )}
                            </Col>
                        </Paddler>
                    </TitleContainer>
                </Slide>
                <Slide>
                    <DummyBox/>
                    <TitleContainer ref={scrollBottomNavRef}>
                        <BottomTitle ref={bottomTextRef}>우리는 븅슨입니다.</BottomTitle>
                    </TitleContainer>
                </Slide>
            </FullPage>
        </Wrraper>
    )
}

export default Home;

// 블러 효과 참고 사이트
// https://mytory.net/archives/13108
// 마우스 내릴 때 이벤트
// https://kyounghwan01.github.io/blog/React/event-scroll-bottom/#ref-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5
// https://velog.io/@dltmdwls15/React-useEffect-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B0%90%EC%A7%80
