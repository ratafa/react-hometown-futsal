import React, {memo, useEffect, useRef} from "react";
import AudioPlayer, {RHAP_UI} from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import styled from "styled-components";
import music from "../resource/music/transfiction want you.mp3"
import {useSelector} from "react-redux";

const AudioPlay = styled(AudioPlayer)`
  width: 300px;
  background: none;
  box-shadow: none;
  
  & svg {
    color: ${({homeAudioStyle}) => homeAudioStyle ? 'white' : '#414141'};
  }

  .rhap_time {
    color: ${({homeAudioStyle}) => homeAudioStyle ? 'white' : '#414141'};
  }

  .rhap_progress-indicator {
    background: ${({homeAudioStyle}) => homeAudioStyle ? 'white' : '#414141'};
  }

  .rhap_volume-indicator {
    background: ${({homeAudioStyle}) => homeAudioStyle ? 'white' : '#414141'};
  }
`;

const Audio = () => {
    const homeAudioStyle = useSelector((state) => state.home );

    return (
            <AudioPlay
                homeAudioStyle={homeAudioStyle}
                // src={"https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"}
                style={{width:'300px', color:'white'}}
                src={music}
                layout="horizontal-reverse"
                volume={0.5}
            />
    )
}

export default Audio;
