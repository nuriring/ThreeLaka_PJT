import React, { useEffect } from 'react';
import { TopBtn, MainBtn } from '../../styles/Common/CommonBtnStyle';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  GuildBlueArcodian,
  GuildBlueArcodianItem,
} from '../../styles/Guild/GuildMainStyle';
import { guildActions } from '../../features/guild/guild-slice';
import {
  BackBlurBox,
  MainBox,
  GradientCircleDiv,
  FlexTransparentDiv,
} from '../../styles/Common/CommonDivStyle';
import { useNavigate } from 'react-router-dom';
import { RiBearSmileLine } from 'react-icons/ri';
import { FaCrown } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';

const GuildMain = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // useSelector
  const topThreeGuild = useAppSelector(
    (state) => state.guild.topThreeGuildList
  );
  const sortedGuild = useAppSelector((state) => state.guild.guildSortedList);
  const myGuildInfo = useAppSelector((state) => state.guild.myGuildInfo);
  // useEffect
  useEffect(() => {
    dispatch(guildActions.getTopThreeGuildStart());
    dispatch(guildActions.getSortedGuildStart('activity'));
    dispatch(guildActions.getSearchGuildStart());
  }, []);
  // onClickHandler
  const onClickGuildSortedList = (basis: string) => {
    dispatch(guildActions.getSortedGuildStart(basis));
  };
  const onClickMoveMyGuildPage = () => {
    navigate('/auth/guild/myGuild');
  };
  const onClickpostGuildRequest = (guildId: number) => {
    dispatch(guildActions.postGuildRequestStart(guildId));
  };

  return (
    <div>
      <FlexTransparentDiv
        widthSize={'65vw'}
        heightSize={'5vh'}
        paddingSize={'0'}
        flexDirection={'row'}
        justifyContent={'start'}
        alignItems={'center'}
        IsBorder={'none'}
        style={{ fontSize: '3vmin', fontFamily: 'PretendardRegular' }}
      >
        <p
          style={{
            fontSize: '2vmin',
            fontWeight: 'bold',
            margin: '0 25%',
            transform: 'translateX(-50%)',
          }}
        >
          <RiBearSmileLine
            size={20}
            style={{ marginRight: '1vmin', verticalAlign: 'middle' }}
          />
          이번 주 우수 길드
          <RiBearSmileLine
            size={20}
            style={{ marginLeft: '1vmin', verticalAlign: 'middle' }}
          />
        </p>
      </FlexTransparentDiv>
      <FlexTransparentDiv
        widthSize={'65vw'}
        heightSize={'75vh'}
        paddingSize={'0'}
        flexDirection={'row'}
        justifyContent={'start'}
        alignItems={'start'}
        IsBorder={'none'}
      >
        <FlexTransparentDiv
          widthSize={'35vw'}
          heightSize={'75vh'}
          paddingSize={'0'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          IsBorder={'none'}
        >
          <MainBox
            widthSize={'32vw'}
            heightSize={'30vh'}
            paddingSize={'2vw 1vw'}
            fontColor={'black'}
            fontSize={'3vmin'}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
              marginBottom: '2vh',
              background: 'transparent',
              boxShadow: 'none',
              // border: 'solid black 1px',
            }}
          >
            {topThreeGuild.length !== 0 ? (
              <>
                <GradientCircleDiv
                  widthSize={'20vmin'}
                  heightSize={'20vmin'}
                  paddingSize={'0'}
                  fontColor={'black'}
                  fontSize={'2vmin'}
                  backgroundUrl={topThreeGuild[0] && topThreeGuild[0].profile}
                  style={{ position: 'relative', marginRight: '2vw' }}
                >
                  <FaCrown
                    style={{
                      color: '#ffb94c',
                      position: 'absolute',
                      width: '9vmin',
                      height: '9vmin',
                      top: '-9.5vmin',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                  <div
                    style={{
                      height: '5vmin',
                      fontSize: '2vmin',
                      position: 'absolute',
                      top: '19vmin',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      wordBreak: 'keep-all',
                    }}
                  >
                    {topThreeGuild[0] &&
                      topThreeGuild[0].guildName.substring(6, 0)}
                  </div>
                </GradientCircleDiv>
                <GradientCircleDiv
                  widthSize={'15vmin'}
                  heightSize={'15vmin'}
                  paddingSize={'0'}
                  fontColor={'black'}
                  fontSize={'1vmin'}
                  backgroundUrl={topThreeGuild[1] && topThreeGuild[1].profile}
                  style={{ position: 'relative', marginRight: '2vw' }}
                >
                  <FaCrown
                    style={{
                      color: '#bcbcbc',
                      position: 'absolute',
                      width: '7vmin',
                      height: '7vmin',
                      top: '-7.5vmin',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                  <div
                    style={{
                      height: '5vmin',
                      fontSize: '2vmin',
                      position: 'absolute',
                      top: '14vmin',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      wordBreak: 'keep-all',
                    }}
                  >
                    {topThreeGuild[1] &&
                      topThreeGuild[1].guildName.substring(6, 0)}
                  </div>
                </GradientCircleDiv>
                <GradientCircleDiv
                  widthSize={'10vmin'}
                  heightSize={'10vmin'}
                  paddingSize={'0'}
                  fontColor={'black'}
                  fontSize={'2vmin'}
                  backgroundUrl={topThreeGuild[2] && topThreeGuild[2].profile}
                  style={{ position: 'relative', marginRight: '0vw' }}
                >
                  <FaCrown
                    style={{
                      color: '#cc7c00',
                      position: 'absolute',
                      width: '5vmin',
                      height: '5vmin',
                      top: '-5.5vmin',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                  <div
                    style={{
                      height: '5vmin',
                      fontSize: '2vmin',
                      position: 'absolute',
                      top: '9vmin',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      wordBreak: 'keep-all',
                    }}
                  >
                    {topThreeGuild[2] &&
                      topThreeGuild[2].guildName.substring(6, 0)}
                  </div>
                </GradientCircleDiv>
              </>
            ) : (
              ''
            )}
          </MainBox>
          <MainBox
            widthSize={'32vw'}
            heightSize={'40vh'}
            paddingSize={'2vh 1vw'}
            fontColor={'black'}
            fontSize={'3vmin'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'none',
            }}
          >
            {myGuildInfo.guildId === 0 ? (
              <div>
                <img
                  src="https://threelaka.s3.ap-northeast-2.amazonaws.com/blue.png"
                  alt="blue bear logo"
                  style={{
                    width: '17vmin',
                    margin: '0 50%',
                    transform: 'translateX(-50%)',
                  }}
                />
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  아직 가입한 길드가 없어요 :&#40;
                </p>

                <p style={{ fontSize: '2vmin' }}>
                  <FcIdea /> 길드란?
                  <br />
                  같은 목표를 가진 사람들과{' '}
                  <span style={{ fontWeight: 'bold' }}>함께</span> 영어 공부를
                  할 수 있는 기능입니다.
                  <br />
                  다양한 사람들과 화상미팅을 통해 에세이와 스피킹을 공유하며{' '}
                  <span style={{ fontWeight: 'bold' }}>성장</span>해보세요!
                </p>
              </div>
            ) : (
              <>
                <FlexTransparentDiv
                  widthSize={'32vw'}
                  heightSize={'15vh'}
                  paddingSize={'0'}
                  flexDirection={'row'}
                  justifyContent={'start'}
                  alignItems={'center'}
                  IsBorder={'none'}
                >
                  <FlexTransparentDiv
                    widthSize={'10vw'}
                    heightSize={'15vh'}
                    paddingSize={'0'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    IsBorder={'none'}
                  >
                    <GradientCircleDiv
                      widthSize={'15vmin'}
                      heightSize={'15vmin'}
                      paddingSize={'0'}
                      fontColor={'black'}
                      fontSize={'2vmin'}
                      backgroundUrl={
                        topThreeGuild[2] && topThreeGuild[2].profile
                      }
                      style={{ position: 'relative', marginRight: '1vw' }}
                    ></GradientCircleDiv>
                  </FlexTransparentDiv>
                  <FlexTransparentDiv
                    widthSize={'22vw'}
                    heightSize={'15vh'}
                    paddingSize={'0'}
                    flexDirection={'column'}
                    justifyContent={'start'}
                    alignItems={'center'}
                    IsBorder={'none'}
                  >
                    <FlexTransparentDiv
                      widthSize={'22vw'}
                      heightSize={'7vh'}
                      paddingSize={'0'}
                      flexDirection={'row'}
                      justifyContent={'start'}
                      alignItems={'center'}
                      IsBorder={'none'}
                    >
                      <FlexTransparentDiv
                        widthSize={'15vw'}
                        heightSize={'7vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                        style={{ fontFamily: 'pretendardBold' }}
                      >
                        {myGuildInfo.guildName}
                      </FlexTransparentDiv>
                      <FlexTransparentDiv
                        widthSize={'7vw'}
                        heightSize={'7vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <MainBtn
                          widthSize={'6vw'}
                          heightSize={'5vh'}
                          paddingSize={'0'}
                          fontSize={'2vmin'}
                          fontColor={'white'}
                          backgroundColor={'black'}
                          style={{ borderRadius: '10px', marginRight: '3vmin' }}
                          onClick={onClickMoveMyGuildPage}
                        >
                          내 길드가기
                        </MainBtn>
                      </FlexTransparentDiv>
                    </FlexTransparentDiv>
                    <FlexTransparentDiv
                      widthSize={'22vw'}
                      heightSize={'8vh'}
                      paddingSize={'0'}
                      flexDirection={'column'}
                      justifyContent={'start'}
                      alignItems={'center'}
                      IsBorder={'none'}
                    >
                      <FlexTransparentDiv
                        widthSize={'22vw'}
                        heightSize={'4vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <BackBlurBox
                          widthSize={'4vw'}
                          heightSize={'3vh'}
                          paddingSize={'0'}
                          fontSize={'1.5vmin'}
                          fontColor={'white'}
                          style={{
                            backgroundColor: '#5CA9FF',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '1vw',
                          }}
                        >
                          마스터
                        </BackBlurBox>
                        <span style={{ fontSize: '2vmin' }}>
                          {myGuildInfo.masterNickname}
                        </span>
                      </FlexTransparentDiv>
                      <FlexTransparentDiv
                        widthSize={'22vw'}
                        heightSize={'4vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <BackBlurBox
                          widthSize={'4vw'}
                          heightSize={'3vh'}
                          paddingSize={'0'}
                          fontSize={'1.5vmin'}
                          fontColor={'white'}
                          style={{
                            backgroundColor: '#5CA9FF',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '1vw',
                          }}
                        >
                          소개
                        </BackBlurBox>
                        <span style={{ fontSize: '2vmin' }}>
                          {myGuildInfo.description}
                        </span>
                      </FlexTransparentDiv>
                    </FlexTransparentDiv>
                  </FlexTransparentDiv>
                </FlexTransparentDiv>
                <FlexTransparentDiv
                  widthSize={'32vw'}
                  heightSize={'21vh'}
                  paddingSize={'0'}
                  flexDirection={'column'}
                  justifyContent={'start'}
                  alignItems={'start'}
                  IsBorder={'none'}
                >
                  <FlexTransparentDiv
                    widthSize={'32vw'}
                    heightSize={'4vh'}
                    paddingSize={'0 1vw'}
                    flexDirection={'row'}
                    justifyContent={'start'}
                    alignItems={'center'}
                    IsBorder={'none'}
                    style={{ fontSize: '2vmin', fontFamily: 'pretendardBold' }}
                  >
                    이번주의 영상
                  </FlexTransparentDiv>
                  <FlexTransparentDiv
                    widthSize={'32vw'}
                    heightSize={'17vh'}
                    paddingSize={'1vh 1vw'}
                    flexDirection={'column'}
                    justifyContent={'start'}
                    alignItems={'start'}
                    IsBorder={'none'}
                  >
                    <BackBlurBox
                      widthSize={'10vw'}
                      heightSize={'4vh'}
                      paddingSize={'0'}
                      fontSize={'1.5vmin'}
                      fontColor={'white'}
                      style={{
                        backgroundColor: '#5CA9FF',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '1vw',
                      }}
                    >
                      공지사항
                    </BackBlurBox>
                    <FlexTransparentDiv
                      widthSize={'30vw'}
                      heightSize={'12vh'}
                      paddingSize={'1vh 1vw'}
                      flexDirection={'column'}
                      justifyContent={'start'}
                      alignItems={'start'}
                      IsBorder={'none'}
                      style={
                        myGuildInfo.notice.length > 50
                          ? { fontSize: '2vmin' }
                          : { fontSize: '3vmin' }
                      }
                    >
                      <span style={{ fontSize: '2vmin' }}>
                        {myGuildInfo.notice}
                      </span>
                    </FlexTransparentDiv>
                  </FlexTransparentDiv>
                </FlexTransparentDiv>
              </>
            )}
          </MainBox>
        </FlexTransparentDiv>
        <FlexTransparentDiv
          widthSize={'30vw'}
          heightSize={'75vh'}
          paddingSize={'0'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          IsBorder={'none'}
        >
          <MainBox
            widthSize={'30vw'}
            heightSize={'72vh'}
            paddingSize={'1.5vh 1vw'}
            fontColor={'black'}
            fontSize={'3vmin'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              boxShadow: 'none',
              // overflowY: 'scroll',
              // overflowX: 'hidden',
            }}
          >
            <TopBtn
              widthSize="5vw"
              heightSize="5vh"
              paddingSize="0"
              fontSize="2vmin"
              fontColor="white"
              backgroundColor="blue"
              style={{ position: 'absolute', top: '-5vh', left: '1vw' }}
              onClick={() => onClickGuildSortedList('activity')}
            >
              활동순
            </TopBtn>
            <TopBtn
              widthSize="5vw"
              heightSize="5vh"
              paddingSize="0"
              fontSize="2vmin"
              fontColor="white"
              backgroundColor="blue"
              style={{ position: 'absolute', top: '-5vh', left: '6vw' }}
              onClick={() => onClickGuildSortedList('size')}
            >
              인원순
            </TopBtn>
            <TopBtn
              widthSize="5vw"
              heightSize="5vh"
              paddingSize="0"
              fontSize="2vmin"
              fontColor="white"
              backgroundColor="blue"
              style={{ position: 'absolute', top: '-5vh', left: '11vw' }}
              onClick={() => onClickGuildSortedList('name')}
            >
              가나다순
            </TopBtn>
            {/* <button>길드 검색 (누르면 모달 뜨기)</button> */}
            <FlexTransparentDiv
              widthSize={'28vw'}
              heightSize={'69vh'}
              paddingSize={'0'}
              flexDirection={'column'}
              justifyContent={'start'}
              alignItems={'start'}
              IsBorder={'none'}
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
              }}
            >
              {sortedGuild.map((guild, idx) => {
                return (
                  <GuildBlueArcodian
                    key={`guild-${idx}`}
                    style={{
                      position: 'relative',
                      boxShadow: 'none',
                      width: '100%',
                    }}
                  >
                    {myGuildInfo.guildId !== 0 ? (
                      ''
                    ) : (
                      <MainBtn
                        widthSize={'6vw'}
                        heightSize={'5vh'}
                        paddingSize={'0'}
                        fontSize={'2vmin'}
                        fontColor={'white'}
                        backgroundColor={'blue'}
                        style={{ position: 'absolute', right: '1vw' }}
                        onClick={() => {
                          onClickpostGuildRequest(guild.guildId);
                        }}
                      >
                        가입신청
                      </MainBtn>
                    )}

                    <FlexTransparentDiv
                      widthSize={'24vw'}
                      heightSize={'5vh'}
                      paddingSize={'0'}
                      flexDirection={'row'}
                      justifyContent={'start'}
                      alignItems={'center'}
                      IsBorder={'none'}
                    >
                      <GradientCircleDiv
                        widthSize={'5vmin'}
                        heightSize={'5vmin'}
                        paddingSize={'0'}
                        fontColor={'black'}
                        fontSize={'2vmin'}
                        backgroundUrl={guild.profile}
                        style={{ margin: '0 1vw 0 0' }}
                      ></GradientCircleDiv>
                      {guild.guildName}
                    </FlexTransparentDiv>
                    <GuildBlueArcodianItem className="arcodian-item">
                      <FlexTransparentDiv
                        widthSize={'22vw'}
                        heightSize={'4vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <BackBlurBox
                          widthSize={'4vw'}
                          heightSize={'3vh'}
                          paddingSize={'0'}
                          fontSize={'1.5vmin'}
                          fontColor={'white'}
                          style={{
                            backgroundColor: '#5CA9FF',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '1vw',
                          }}
                        >
                          마스터
                        </BackBlurBox>
                        {guild.masterNickname}
                      </FlexTransparentDiv>
                      <FlexTransparentDiv
                        widthSize={'22vw'}
                        heightSize={'4vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <BackBlurBox
                          widthSize={'4vw'}
                          heightSize={'3vh'}
                          paddingSize={'0'}
                          fontSize={'1.5vmin'}
                          fontColor={'white'}
                          style={{
                            backgroundColor: '#5CA9FF',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '1vw',
                            wordBreak: 'keep-all',
                          }}
                        >
                          소개
                        </BackBlurBox>
                        {guild.description}
                      </FlexTransparentDiv>
                      <FlexTransparentDiv
                        widthSize={'22vw'}
                        heightSize={'4vh'}
                        paddingSize={'0'}
                        flexDirection={'row'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        IsBorder={'none'}
                      >
                        <BackBlurBox
                          widthSize={'4vw'}
                          heightSize={'3vh'}
                          paddingSize={'0'}
                          fontSize={'1.5vmin'}
                          fontColor={'white'}
                          style={{
                            backgroundColor: '#5CA9FF',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '1vw',
                          }}
                        >
                          정원
                        </BackBlurBox>
                        {`${guild.memberSize}명/20명`}
                      </FlexTransparentDiv>
                    </GuildBlueArcodianItem>
                  </GuildBlueArcodian>
                );
              })}
            </FlexTransparentDiv>
          </MainBox>
        </FlexTransparentDiv>
      </FlexTransparentDiv>
    </div>
  );
};

export default GuildMain;
