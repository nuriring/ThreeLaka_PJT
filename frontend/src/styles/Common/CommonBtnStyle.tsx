import styled from 'styled-components';

interface CommonBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  widthSize: string;
  heightSize: string;
  paddingSize: string;
  fontColor: 'white' | 'grey' | 'black' | 'blue';
  fontSize: string;
  backgroundColor: 'blue' | 'gradient' | 'black';
}

export const TopBtn = styled.button<CommonBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  padding: ${(props) => props.paddingSize};
  font-size: ${(props) => props.fontSize};
  color: ${(props) =>
    props.fontColor === 'white'
      ? '#ffffff'
      : props.fontColor === 'grey'
      ? '#9897a9'
      : props.fontColor === 'black'
      ? '#111111'
      : props.fontColor === 'blue'
      ? '#4a9fff'
      : '#111111'};
  background: ${(props) =>
    props.backgroundColor === 'blue'
      ? '#4a9fff'
      : props.backgroundColor === 'gradient'
      ? 'linear-gradient(106.62deg, #83BDFF 8.18%, rgba(136, 192, 255, 0.90051) 49.26%, #8DC2FF 69.16%, #C1FFA9 92.42%);'
      : props.backgroundColor === 'black'
      ? '#111111'
      : '#4a9fff'};
  border-top-left-radius: 2vmin;
  border-top-right-radius: 2vmin;
  border: none;
  &.pale {
    opacity: 0.5;
    :hover {
      opacity: 0.7;
    }
  }
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.5;
  }
`;

export const RightBtn = styled.button<CommonBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  padding: ${(props) => props.paddingSize};
  font-size: ${(props) => props.fontSize};
  color: ${(props) =>
    props.fontColor === 'white'
      ? '#ffffff'
      : props.fontColor === 'grey'
      ? '#9897a9'
      : props.fontColor === 'black'
      ? '#111111'
      : props.fontColor === 'blue'
      ? '#4a9fff'
      : '#111111'};
  background: ${(props) =>
    props.backgroundColor === 'blue'
      ? '#4a9fff'
      : props.backgroundColor === 'gradient'
      ? 'linear-gradient(106.62deg, #83BDFF 8.18%, rgba(136, 192, 255, 0.90051) 49.26%, #8DC2FF 69.16%, #C1FFA9 92.42%);'
      : props.backgroundColor === 'black'
      ? '#111111'
      : '#4a9fff'};
  border-top-right-radius: 2vmin;
  border-bottom-right-radius: 2vmin;
  border: none;
  &.pale {
    opacity: 0.5;
    :hover {
      opacity: 0.7;
    }
  }
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.5;
  }
`;

export const MainBtn = styled.button<CommonBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  padding: ${(props) => props.paddingSize};
  font-size: ${(props) => props.fontSize};
  color: ${(props) =>
    props.fontColor === 'white'
      ? '#ffffff'
      : props.fontColor === 'grey'
      ? '#9897a9'
      : props.fontColor === 'black'
      ? '#111111'
      : props.fontColor === 'blue'
      ? '#4a9fff'
      : '#111111'};
  background: ${(props) =>
    props.backgroundColor === 'blue'
      ? '#4a9fff'
      : props.backgroundColor === 'gradient'
      ? 'linear-gradient(106.62deg, #83BDFF 8.18%, rgba(136, 192, 255, 0.90051) 49.26%, #8DC2FF 69.16%, #C1FFA9 92.42%);'
      : props.backgroundColor === 'black'
      ? '#111111'
      : '#4a9fff'};
  border-radius: 2vmin;
  border: none;
  &.pale {
    opacity: 0.5;
    :hover {
      opacity: 0.7;
    }
  }
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.5;
  }
`;

export const GradientRoundBtn = styled.button<CommonBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  padding: ${(props) => props.paddingSize};
  font-size: ${(props) => props.fontSize};
  color: ${(props) =>
    props.fontColor === 'white'
      ? '#ffffff'
      : props.fontColor === 'grey'
      ? '#9897a9'
      : props.fontColor === 'black'
      ? '#111111'
      : props.fontColor === 'blue'
      ? '#4a9fff'
      : '#111111'};
  background: ${(props) =>
    props.backgroundColor === 'blue'
      ? '#4a9fff'
      : props.backgroundColor === 'gradient'
      ? 'linear-gradient(110.64deg, #4A9FFF 5.65%, rgba(88, 172, 240, 0.861458) 45.15%, #B0FF91 84.64%);'
      : props.backgroundColor === 'black'
      ? '#111111'
      : '#4a9fff'};
  border-radius: 5vmin;
  border: none;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.5;
  }
`;

export const MoveToNextRightBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 1vw;
  top: 55vh;
  width: 10vmin;
  height: 10vmin;
  /* background: blue; */
  color: black;
  & p {
    display: none;
    color: black;
  }
  :hover {
    color: #4a9fff;
    & p {
      display: inline;
    }
  }
`;

export const MoveToNextLeftBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 1vw;
  top: 55vh;
  width: 10vmin;
  height: 10vmin;
  /* background: blue; */
  color: black;
  & p {
    display: none;
    color: black;
  }
  :hover {
    color: #4a9fff;
    & p {
      display: inline;
    }
  }
`;
