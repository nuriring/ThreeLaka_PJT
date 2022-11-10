import styled from 'styled-components';

export const ReadPageBlock = styled.div`
  font-family: PretendardRegular;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: row;
  width: 100vw;
  height: 85vh;
  padding: 0vh 5vw 0vh 5vw;
  /* border: 1px solid black; */
`;

export const WordBookAddReqBtn = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 55vh;
  left: 43vw;
  width: 5vmin;
  height: 5vmin;
  font-size: 5vmin;
  padding-top: 0.5vmin;
  background-color: black;
  color: white;
`;

export const DictInput = styled.input`
  width: 25vw;
  height: 5vh;
  font-family: PretendardBold;
  font-size: 3vmin;
  padding-left: 1vw;
  color: black;
  background: transparent;
  /* box-shadow: 10px 10px 80px rgba(63, 39, 102, 0.1); */
  border-radius: 2vmin;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const DictResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 34vw;
  height: 32vh;
  padding: 0 1vw;
  font-size: 3vmin;
  border-bottom: black 2px solid;
  background-color: white;
  color: black;
`;

export const ScriptItemBox = styled.div`
  min-height: 19.5vh;
  width: 45vw;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  color: black;
  font-size: 2vmin;
  /* border: 1px solid green; */
`;

export const ScriptTimeStamp = styled.div`
  cursor: pointer;
  min-height: 5vh;
  background-color: #83bdff;
  width: 5vw;
  margin-left: 2vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2.5vmin;
  /* border: 1px solid green; */
  &.now-played {
    background-color: #1c2e4a;
    color: white;
  }
  :hover {
    background: linear-gradient(
      90deg,
      rgba(74, 159, 255, 1) 0%,
      rgba(88, 172, 240, 1) 41%,
      rgba(176, 255, 145, 1) 100%
    );
  }
`;

export const ScriptText = styled.div`
  min-height: 19.5vh;
  width: 33vw;
  padding: 0vh 2vw;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: black;
  font-size: 2vmin;
  /* border: 1px solid green; */
`;

export const ScriptWordSpan = styled.span`
  /* margin-right: 0.7vmin; */
  display: inline-block;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #b5fe89;
    border-radius: 0;
    padding: 0.5vmin 0;
  }
  &.word-selected {
    background-color: rgba(176, 255, 145, 0.8);
    /* background-color: #1c2e4a; */
    color: black;
  }
  &.dummy {
    pointer-events: none;
  }
  &.dummy :hover {
    background-color: white;
  }
`;

export const AutoScrollBtn = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 10vh;
  right: 8.5vw;
  width: 5vw;
  height: 3vh;
  border-radius: 10px;
  background-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  &::before {
    content: '';
    position: absolute;
    width: 2vmin;
    height: 2vmin;
    border-radius: 10px;
    top: 0.5vmin;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
  &.auto-scroll {
    background: linear-gradient(
      90deg,
      rgba(74, 159, 255, 1) 0%,
      rgba(88, 172, 240, 1) 41%,
      rgba(176, 255, 145, 1) 100%
    );
  }
  &.auto-scroll::before {
    background-color: white;
    transform: translateX(3.5vw);
    transition: 1s;
  }
  &.manual-scroll::before {
    background-color: black;
    /* left: 0.5vmin;
    top: 0.5vmin; */
    transform: translateX(0.5vw);
    transition: 1s;
  }
`;

export const AutoScrollText = styled.div`
  font-size: 2vmin;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 10.2vh;
  right: 11vw;
  width: 10vw;
  height: 3vh;
  & p {
    margin: 0;
  }
`;