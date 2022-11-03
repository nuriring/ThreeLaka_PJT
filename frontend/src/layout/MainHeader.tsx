import React, { useState } from 'react';
import {
  HeaderMenuRegion,
  LinkWrapper,
  TitleRegion,
} from '../styles/Layout/HeaderStyle';
import { Link } from 'react-router-dom';
import { LogoutIcon } from '../styles/Layout/HeaderStyle';
import { useAppDispatch } from '../utils/hooks';
import { authActions } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
const MainHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('이거디나');
    dispatch(authActions.logout());
    navigate('/auth/login');
  };
  return (
    <HeaderMenuRegion>
      <LinkWrapper bgColor="white" widthSize="10vw" style={{ color: "black"}}>
        <Link to="/">Home</Link>
      </LinkWrapper>
      <LinkWrapper bgColor="white" widthSize="10vw">
        <Link to="/videos">Videos</Link>
      </LinkWrapper>
      {/* <TitleRegion>THREELAKA</TitleRegion> */}
      <LinkWrapper bgColor="white" widthSize="10vw">
        <Link to="/auth/dashboard/1">dashboard</Link>
      </LinkWrapper>
      <LinkWrapper bgColor="white" widthSize="10vw">
        <LogoutIcon onClick={handleLogout}></LogoutIcon>
      </LinkWrapper>
    </HeaderMenuRegion>
  );
};

export default MainHeader;
