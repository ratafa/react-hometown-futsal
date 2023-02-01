import React, {memo, useState} from "react";
import styled, {css} from "styled-components";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeHomeStateFalse, changeHomeStateTrue} from "../store";
import Row from "./Layout/Row";
import Paddler from "./Layout/Paddler";
import Audio from "./AudisPlay";
import { useSelector } from "react-redux"

const Container = styled.nav`
  display: flex;
  position: absolute;
  justify-content: space-between;
  // position fixed와 justify content center은 동시에 사용할 수 없다.
  // https://stackoverflow.com/questions/40772841/how-to-position-fixed-the-navbar-when-using-flexbox
  align-items: center;
  z-index: 1000;
  padding-top: 15px;
  height: 30px;
  padding-bottom: 15px;
  width: 100%;
  background: none;
`;

const LinkText = styled(Link)`
  font-size: 16px;
  font-family: 'Leferi Point', serif;
  text-decoration: none;
  color: black;

  ${({text}) => text && css`
    color: white;
  `}
  
  :hover {
    font-weight: 600;
  }
`;

const Header = memo(() => {
    const dispatch = useDispatch();
    const textColor = useSelector((state) => state.home );

    const clickLink = (type) => () => {
        type === 'home' ? dispatch(changeHomeStateTrue()) : dispatch(changeHomeStateFalse());
    }
    // 고차 함수 자세한 내용은 제로초 인간js되기 영상 참고

    return (
        <Container>
            <Audio/>
            <Paddler right={50}>
                <Row gap={30}>
                    <LinkText onClick={clickLink('home')} text={textColor} to={'/'}>홈</LinkText>
                    <LinkText text={textColor}>|</LinkText>
                    <LinkText onClick={clickLink('abc')} text={textColor} to={'/matchTeam'}>팀 매칭</LinkText>
                    <LinkText text={textColor}>|</LinkText>
                    <LinkText onClick={clickLink('abc')} text={textColor} to={'/playerAbility/0'}>선수 능력치 보기</LinkText>
                </Row>
            </Paddler>
        </Container>
    )
})

Header.defaultProps = {
    position: true,
    background: 'none',
    textColor: true,
}

export default Header;

// https://blog.pumpkin-raccoon.com/70
// 레이아웃 제작시 참고 사이트
