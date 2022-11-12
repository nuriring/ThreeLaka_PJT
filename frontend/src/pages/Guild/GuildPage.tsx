import React from 'react';
import SideBar from '../../layout/SideBar';
import { useParams, useNavigate } from 'react-router-dom';
import DailyBoard from '../Dashboard/DailyBoard/DailyBoard';
import HistoryBoard from '../Dashboard/HistoryBoard/HistoryBoard';
import Profile from '../Dashboard/Profile/Profile';
import GuildMain from './GuildMainPage';
import MyGuild from '../Guild/MyGuildPage';
import MasterSetting from '../Guild/MasterSettingPage';
import { DashBoardBlock } from '../../styles/DashBoard/DashBoardStyle';
import { GuildBoardBox } from '../../styles/Guild/GuildStyle';
import { MainPaleBox } from '../../styles/Common/CommonDivStyle';
const GuildPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pageNum = params.pageNum ? params.pageNum : '0';
  const handleSwitchPage = (pageNum: number) => {
    navigate(`/auth/dashboard/${pageNum}`, { replace: true });
  };

  const guildPageType = params.guildPageType ? params.guildPageType : 'main';
  const handleSwitchGuildPage = (guildPageType: string) => {
    navigate(`/auth/guild/${guildPageType}`, { replace: true });
  };

  return (
    <DashBoardBlock>
      <MainPaleBox
        widthSize={'80vw'}
        heightSize={'90vh'}
        paddingSize={'0'}
        fontColor={'black'}
        fontSize={'2vmin'}
        style={{ display: 'flex' }}
      >
        <SideBar
          handleSwitchPage={handleSwitchPage}
          handleSwitchGuildPage={handleSwitchGuildPage}
        ></SideBar>
        <GuildBoardBox>
          {pageNum === '1' && <DailyBoard />}
          {pageNum === '2' && <HistoryBoard />}
          {pageNum === '3' && <Profile />}
          {guildPageType === 'main' && <GuildMain />}
          {guildPageType === 'myGuild' && <MyGuild />}
          {guildPageType === 'admin' && <MasterSetting />}
        </GuildBoardBox>
      </MainPaleBox>
    </DashBoardBlock>
  );
};

export default GuildPage;
