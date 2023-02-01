import React, {useCallback, useRef, useState} from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import BasicLayout from "../components/Layout/BasicLayout";
import Col from "../components/Layout/Col";
import Row from "../components/Layout/Row";
import Paddler from "../components/Layout/Paddler";


const Container = styled.div`
  width: 100%;
  //background: #414141;
  background: #1d2b3a;
  //background: #1d2b3a;
  //https://xetown.com/questions/854157
`

const Title = styled.div`
  color: gainsboro;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  border-bottom: 1px solid whitesmoke;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: #1d2b3a;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  height: 32px;
  color: white;
  font-size: 20px;

  :valid, :focus {
    border: 1px solid #00dfc4;
  }

  :valid ~ span,
  :focus ~ span {
    color: #00dfc4;
    transform: translateX(10px) translateY(-7px);
    padding: 0 20px;
    background: #1d2b3a;
    border-left: 1px solid #00dfc4;
    border-right: 1px solid #00dfc4;
    letter-spacing: 0.2em;
  }
`;

const InputValue = styled.span`
  position: absolute;
  padding: 10px;
  color: rgba(255, 255, 255, 0.25);
  top: 0;
  left: 0;
  pointer-events: none;
  transition: 0.5s;
`;

const SubTitle = styled.div`
  width: 100%;
  color: gainsboro;
  text-align: center;
  font-size: 23px;
  font-weight: 400;
  line-height: 30px;
`;

const SubmitButton = styled.input`
  color: whitesmoke;
  font-size: 20px;
  height: 40px;
  width: 90px;
  border-radius: 15px;
  background: #1d2b3a;
  border: 1px solid whitesmoke;
  transition: 0.5s;
  
  :hover {
    background: #00dfc4;
    color: #414141;
  }
`;

const Selector = styled.select`
  background: #1d2b3a;
  height: 54px;
  padding: 10px 20px;
  text-align: center;
  font-size: 20px;
  color: whitesmoke;
  border-radius: 20px;
  appearance: none;
  text-decoration: none;

  :hover {
    background: #00dfc4;
    color: #414141;
  }
`;

const MatchingTeam = () => {
    const [memberA, handleMemberA, setMemberA] = useInput('');
    const [memberB, handleMemberB, setMemberB] = useInput('');
    const [pickedMember, handlePickedMember, setPickedMember] = useInput('');
    const [selectTeam, setSelectTeam] = useState('');
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const memberRef = useRef();
    const pickMemberRef = useRef();

    const handleOnSubmit = useCallback((e) => {
        e.preventDefault();
        const randomNum = Math.round(Math.random());
        if (randomNum === 0) {
            setTeamA([...teamA, memberA]);
            setTeamB([...teamB, memberB]);
        } else {
            setTeamA([...teamA, memberB]);
            setTeamB([...teamB, memberA]);
        }
        setMemberA('');
        setMemberB('');
        memberRef.current.focus();
    }, [memberA, memberB, teamA, teamB, setMemberA, setMemberB]);
    const handleSelectedTeam = (e) => {
        setSelectTeam(e.target.value);
        (e.target.value === 'teamA') ? setTeamA([...teamA, pickedMember]) : setTeamB([...teamB, pickedMember]);
        setSelectTeam('');
        setPickedMember('');
        pickMemberRef.current.focus();
    }

    return (
        <Container>
            <Col align={'center'} gap={40}>
                <Paddler top={40}>
                    <Title>풋살 팀 대진 도구</Title>
                </Paddler>
                <Col align={'center'} gap={20}>
                    <SubTitle>1. 밸런스 팀짜기</SubTitle>
                    <form onSubmit={handleOnSubmit}>
                        <Row>
                            <InputBox>
                                <Input required={'required'} type={'text'} value={memberA} onChange={handleMemberA}
                                       ref={memberRef}/>
                                <InputValue>선수 A</InputValue>
                            </InputBox>
                            <Paddler left={20} right={20}>
                                <Title> vs </Title>
                            </Paddler>
                            <InputBox>
                                <Input required={'required'} type={'text'} value={memberB} onChange={handleMemberB}/>
                                <InputValue>선수 B</InputValue>
                            </InputBox>
                        </Row>
                        <Paddler top={20} bottom={20}>
                        <Row justify={'center'}>
                            <SubmitButton type={'submit'} value={'완료'}/>
                        </Row>
                        </Paddler>
                    <SubTitle style={{fontSize:18}}>짜고 싶은 멤버를 입력하고 엔터를 눌러주세요!</SubTitle>
                    </form>
                </Col>
                <Col align={'center'} gap={10}>
                    <SubTitle>2. 미리 팀원 뽑아두기</SubTitle>
                    <Row gap={20}>
                        <InputBox>
                            <Input required={'required'} type={'text'} value={pickedMember}
                                   onChange={handlePickedMember}
                                   ref={pickMemberRef}/>
                            <InputValue>팀원</InputValue>
                        </InputBox>
                        <Selector onChange={handleSelectedTeam} value={selectTeam}>
                            <option value={'none'}>팀 지정</option>
                            <option value={'teamA'}>Team A</option>
                            <option value={'teamB'}>Team B</option>
                        </Selector>
                    </Row>
                    <SubTitle style={{fontSize:18}}>팀원을 기입하고, 팀을 지정해주세요!</SubTitle>
                </Col>
                <Col align={'center'} gap={10}>
                    <SubTitle>3. 뽑힌 팀원</SubTitle>
                    <SubTitle>
                        팀 A :
                        {teamA.map((v, i) => {
                            return (<span key={`A 팀의 ${v} ${i}번쨰`}>{v}, </span>)
                        })}
                    </SubTitle>
                    <SubTitle>
                        팀 B :
                        {teamB.map((v, i) => {
                            return (<span key={`B 팀의 ${v} ${i}번쨰`}>{v}, </span>)
                        })}
                    </SubTitle>
                </Col>
            </Col>
        </Container>
    );
};

export default MatchingTeam;
