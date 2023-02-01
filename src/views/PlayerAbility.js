import React, {useCallback, useEffect, useState} from "react";
import {BsStarFill, BsPersonFill} from "react-icons/bs";
import styled from "styled-components";
import {RadarChart} from "../components/RadarCharts";
import {useNavigate, useParams, Link} from "react-router-dom";
import {playerData} from "../playerData";
import Row from "../components/Layout/Row";
import Col from "../components/Layout/Col";
import Paddler from "../components/Layout/Paddler";

const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  left: 0;
  width: 30vh;
  gap: 1px;
`;

const SelectPlayer = styled(Link)`
  display: flex;
  margin-left: 120px;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 40px;
  font-size: 25px;
  color: black;
  transition: 0.3s ease-in-out;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #304352, #d7d2cc);
  background-size: 250%, 250%;
`;

const PlayerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  width: 50vw;
  height: 60vh;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 30px;
  padding: 25px;
`;

const PlayerName = styled.div`
  font-size: 25px;
  text-align: center;
  border-bottom: 1px solid #414141;
`;

const Description = styled.div`
    font-size: 17px;
  padding-left: 12px;
`;

const TotalScore = styled.div`
  font-size: 25px;
`;

const TotalText = styled.div`
    font-size: 20px;
`


const SkillStar = styled.div`
  color: #ffdb4b;
  font-size: 20px;
`;

const ChartsWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const PlayerAbility = () => {
    const skillArr = new Array(5).fill(0);
    const {playerName} = useParams();
    const [playerSkill, setPlayerSkill] = useState([...skillArr].fill(1, 0, playerData[playerName].skill));
    const [isSelected, setIsSelected] = useState(0);

    const handleSelected = (i) => {
        setIsSelected(i)
    }

    useEffect(() => {
        setPlayerSkill([...skillArr].fill(1, 0, playerData[playerName].skill));
    }, [playerName]);

    return (
            <Row fill>
                <PlayerList>
                    {
                        playerData.map((capacity, i) => {
                            return (
                                <SelectPlayer
                                    key={i}
                                    to={`/playerAbility/${capacity.id}`}
                                    onClick={() => handleSelected(i)}
                                    // 왜인지 onClick{setIsSelected(i)}를 하면 무한 루프 버그에 걸린다.
                                    // https://wnsdufdl.tistory.com/245
                                    // https://born-dev.tistory.com/4
                                    oddNumber={i}
                                    selected={isSelected === i}
                                >
                                    {capacity.name}
                                    {(isSelected === i) && <BsPersonFill/>}
                                </SelectPlayer>
                            )
                        })
                    }
                </PlayerList>
                <Background>
                    <PlayerInfo>
                        <Paddler left={30} right={30}>
                            <Row gap={15} align={'center'}>
                                <Col gap={12} justify={'center'} align={'center'}>
                                    <Col justify={'flex-end'}>
                                        <img src={playerData[playerName].img} alt={'profile'} loading={'lazy'} decoding={'async'} style={{
                                            width: '150px',
                                            height: '250px',
                                            border: 'solid 1px darkGrey',
                                            borderRadius: '15px'
                                        }}
                                        />
                                    </Col>
                                    <PlayerName>{playerData[playerName]?.name}</PlayerName>
                                    <Col gap={5} style={{width: '160px', paddingLeft: '50px'}}>
                                        <Description>키 : {playerData[playerName]?.height}</Description>
                                        <Description>국적 : {playerData[playerName]?.country}</Description>
                                        <Description>주발 : {playerData[playerName]?.mostUsedFoot}</Description>
                                        <Description>나이 : {playerData[playerName]?.age}</Description>
                                        <Description>특성 : {playerData[playerName]?.character}</Description>
                                    </Col>
                                </Col>
                                <Col gap={20} justify={'center'} align={'center'}>
                                    <Row gap={30} justify={'center'} align={'center'}>
                                        <Col gap={7} justify={'center'} align={'center'}>
                                            <TotalText style={{color: '#414141'}}>
                                                Total
                                            </TotalText>
                                            <TotalScore>
                                                {Math.round(playerData[playerName].total * 1.67)}
                                            </TotalScore>
                                        </Col>
                                        <Col gap={5}>
                                            <TotalText style={{color: '#414141'}}>개인기</TotalText>
                                            <SkillStar/>
                                            <Row gap={5}>
                                                {playerSkill.map((skill, i) => {
                                                    return (skill === 0) ? (
                                                            <SkillStar key={i}>
                                                                <BsStarFill style={{
                                                                    color: 'grey',
                                                                    fontSize: '20px'
                                                                }}/>
                                                            </SkillStar>
                                                        ) :
                                                        (
                                                            <SkillStar key={i}>
                                                                <BsStarFill/>
                                                            </SkillStar>
                                                        )
                                                })}
                                            </Row>
                                        </Col>
                                    </Row>
                                    <ChartsWrapper>
                                        <RadarChart capacity={playerData[playerName]}></RadarChart>
                                    </ChartsWrapper>
                                </Col>
                            </Row>
                        </Paddler>
                    </PlayerInfo>
                </Background>
            </Row>
    )
}

export default PlayerAbility;
