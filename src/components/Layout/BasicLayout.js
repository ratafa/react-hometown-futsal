import React from "react";
import Header from "../Header";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

export const TOP_HACK = 60;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  display: flex;
  // display의 flex를 줌으로써 flex-grow의 기본값이 1인 것을 활용하여 content쪽 화면을 꽉 채운다.
  min-height: calc(100vh - ${TOP_HACK}px);
  height: 1px;
  margin-top: ${({bodyMargin}) => bodyMargin ? null : '60px'};
  //왜 height 값으로 1px을 줬는가?
  //https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
`;

const BasicLayout = ({children}) => {
    const bodyMargin = useSelector((state) => state.home );

    return (
        <Layout>
            <Header/>
            <ContentArea bodyMargin={bodyMargin}>
                {children}
            </ContentArea>
        </Layout>
    )
}

export default BasicLayout;

// https://blog.pumpkin-raccoon.com/70
// 레이아웃 제작시 참고 사이트
