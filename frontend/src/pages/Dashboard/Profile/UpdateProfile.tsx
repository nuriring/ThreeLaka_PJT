import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  FlexTransparentDiv,
  MainBox,
} from '../../../styles/Common/CommonDivStyle';
import {
  ProfileImgBox,
  ProfileCenter,
  EditBtn,
} from '../../../styles/DashBoard/DashBoardStyle';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import ModifyUserInfo from './ModifyUserInfo';
import SelectProfile from './SelectProfile';
import { dashboardActions } from '../../../features/dashboard/dashboard-slice';
import UpdateTagModal from './UpdateTagModal';
import { MainBtn } from '../../../styles/Common/CommonBtnStyle';
const UpdateProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [profileNum, setProfileNum] = useState('');

  const openModalProfle = () => {
    setIsOpen(!isOpen);
  };
  const openModalTag = () => {
    setIsTagOpen(!isTagOpen);
  };
  const profile = useAppSelector((state) => state.auth.currentUser?.profile);
  const myGuildInfo = useAppSelector((state) => state.guild.myGuildInfo);
  const tagList = useAppSelector((state) => state.dashboard.tagList);
  const dispatch = useAppDispatch();
  const totalStudyTime = useAppSelector(
    (state) => state.dashboard.totalStudyTime
  );
  const username = useAppSelector((state) => state.auth.currentUser?.username);
  const nickname = useAppSelector((state) => state.auth.currentUser?.nickname);
  useEffect(() => {
    dispatch(dashboardActions.getTotalStudyTime());
  }, []);

  return (
    <FlexTransparentDiv
      widthSize={'32vw'}
      heightSize={'81.5vh'}
      paddingSize={'0'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      IsBorder={'none'}
      style={{ marginLeft: '0' }}
    >
      <FlexTransparentDiv
        widthSize={'32vw'}
        heightSize={'40vh'}
        paddingSize={'0'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        IsBorder={'none'}
        style={{ position: 'relative', marginTop: '6vh' }}
      >
        <ProfileImgBox
          style={{
            width: '18vmin',
            height: '18vmin',
            background: `linear-gradient(
                110.64deg,
                #4a9fff 5.65%,
                rgba(88, 172, 240, 0.861458) 45.15%,
                #b0ff91 84.64%
              )`,
            borderRadius: '50%',
            border: '4px solid #fff',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            top: '-6vh',
          }}
        >
          <ProfileCenter
            className={profile !== '0' ? 'profileImg' + profile : 'default'}
            style={{ backgroundSize: '12vmin 12vmin' }}
          ></ProfileCenter>
          <EditBtn onClick={openModalProfle}></EditBtn>
        </ProfileImgBox>

        {isOpen ? (
          <SelectProfile
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setProfileNum={setProfileNum}
          />
        ) : null}

        <MainBox
          widthSize={'28vw'}
          heightSize={'40vh'}
          paddingSize={'2vh 2vw'}
          fontColor={'black'}
          fontSize={'2vmin'}
          style={{
            display: 'flex',
            position: 'absolute',
            boxShadow: 'none',
            top: '5vh',
          }}
        >
          <FlexTransparentDiv
            widthSize={'24vw'}
            heightSize={'40vh'}
            paddingSize={'0'}
            flexDirection={'column'}
            justifyContent={'start'}
            alignItems={'center'}
            IsBorder={'none'}
            style={{ position: 'absolute', top: '9vh' }}
          >
            <div style={{ margin: '2vh 0 1vh', color: '#aaa' }}>{username}</div>
            <div style={{ margin: '0 0 2vh', color: '#aaa' }}>{nickname}</div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 6vw)',
                justifyItems: 'center',
                marginTop: '2vh',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold' }}>?????? ??????</div>
                <div
                  style={{
                    color: '#4A9FFF',
                    marginTop: '2vh',
                    width: '10vw',
                    wordBreak: 'keep-all',
                    fontSize: '2.5vmin',
                  }}
                >
                  {myGuildInfo.guildName === ''
                    ? '????????? ????????? ???????????? :('
                    : myGuildInfo.guildName}
                </div>
              </div>
              <div
                style={{
                  border: '1.2px solid #eee',
                  width: '0.3px',
                  height: '13vh',
                  background: '#eee',
                }}
              ></div>
              <div>
                <div style={{ fontWeight: 'bold' }}>??? ?????? ??????</div>
                <div
                  style={{
                    color: '#4A9FFF',
                    marginTop: '2vh',
                    width: '10vw',
                    wordBreak: 'break-all',
                    fontSize: '2.5vmin',
                  }}
                >
                  {totalStudyTime.time !== 0 &&
                  totalStudyTime.time / 3600 >= 1 ? (
                    <div>{(totalStudyTime.time / 3600).toFixed(1)}??????</div>
                  ) : (
                    <div>{(totalStudyTime.time / 60).toFixed(1)}???</div>
                  )}
                </div>
              </div>
            </div>
          </FlexTransparentDiv>
        </MainBox>
      </FlexTransparentDiv>

      <FlexTransparentDiv
        widthSize={'32vw'}
        heightSize={'40vh'}
        paddingSize={'0'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        IsBorder={'none'}
      >
        {isTagOpen ? (
          <UpdateTagModal isTagOpen={isTagOpen} setIsTagOpen={setIsTagOpen} />
        ) : null}

        {/* <UpdateTagModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}

        <MainBox
          widthSize={'28vw'}
          heightSize={'28vh'}
          paddingSize={'2vh 2vw'}
          fontColor={'black'}
          fontSize={'2vmin'}
          style={{ marginTop: '9vh' }}
        >
          <h3>?????? ?????? ??????</h3>
          <FlexTransparentDiv
            widthSize={'24vw'}
            heightSize={'17vh'}
            paddingSize={'0'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            IsBorder={'none'}
          >
            {tagList.length !== 0
              ? tagList.map((item, idx) => {
                  return (
                    <span
                      style={{
                        marginRight: '1vw',
                        lineHeight: '28px',
                        fontSize: '3vmin',
                        fontWeight: 'bold',
                      }}
                    >
                      #{item}
                    </span>
                  );
                })
              : null}
          </FlexTransparentDiv>
          <MainBtn
            widthSize={'5vw'}
            heightSize={'4vh'}
            paddingSize={'0'}
            fontSize={'2.5vmin'}
            fontColor={'white'}
            backgroundColor={'black'}
            style={{ marginLeft: '9vw', borderRadius: '5vmin' }}
            onClick={openModalTag}
          >
            ??????
          </MainBtn>
        </MainBox>
      </FlexTransparentDiv>
    </FlexTransparentDiv>
  );
};

export default UpdateProfile;
