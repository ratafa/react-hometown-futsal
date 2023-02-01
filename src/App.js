import React, {useRef, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './views/Home'
import './style.css';
import MatchingTeam from "./views/MatchingTeam";
import PlayerAbility from "./views/PlayerAbility";
import 'react-h5-audio-player/lib/styles.css';
import BasicLayout from "./components/Layout/BasicLayout";

function App() {
    const bodyRef = useRef(null);
    const MIN_DURATION = 10;
    const handleSnowStyle = () => {
        const delaySnow = Math.random() * 10;
        const snow = document.createElement('div');
        const duration = Math.random() + MIN_DURATION;
        snow.classList.add('snow');
        snow.style.left = `${Math.random() * window.screen.width}px`;
        snow.style.animationDelay = `${delaySnow}s`;
        snow.style.opacity = `${Math.random() + 0.2}`;
        snow.style.animation = `TopDownAnimation ${duration}s linear`;
        bodyRef.current.appendChild(snow);

        setTimeout(() => {
            bodyRef.current.removeChild(snow);
            handleSnowStyle();
        }, (duration + delaySnow) * 1000);
    }
    const snowEffect = () => {
        const snowArr = new Array(50).fill(null);
        snowArr.forEach((v, i) => setTimeout(handleSnowStyle, 500 * i))
    }

    useEffect(snowEffect, [snowEffect]);
        const [pageState, setPageState] = useState(false);

    return (
        <div ref={bodyRef}>
            <BasicLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/matchTeam" element={<MatchingTeam/>}/>
                    <Route path="/playerAbility/:playerName" element={<PlayerAbility/>}/>
                </Routes>
            </BasicLayout>
        </div>
    );
}

export default App;

// 라우터 참고 자료
// https://velog.io/@velopert/react-router-v6-tutorial
