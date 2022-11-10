import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoData, RecommendVideos, RecentVideoData } from '../../models';

type VideoState = {
  // VideoState loading 상태
  loading: boolean;
  // VideoUrl 체크
  correctUrl: boolean | null;
  // 비디오 1개
  videoData: VideoData;
  // 최근 공부한 영상 1개
  recentVideoData: RecentVideoData;
  // 추천 비디오 4개
  recommendVideoList: RecommendVideos[];
};

let initialState: VideoState = {
  loading: false,
  correctUrl: null,
  videoData: {
    watched: null,
    video: {
      videoId: '',
      title: '',
      description: '',
      script: '',
    },
  },
  recentVideoData: {
    learningRecord: {
      date: 'string',
      learningRecordId: 0,
      stage: '',
      userId: 0,
      videoId: '',
    },
    video: {
      title: '',
      videoId: '',
      description: '',
      korScript: false,
    },
  },
  recommendVideoList: [],
};

// Slice
const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    // 비디오 1개 정보 받아오기 요청
    getVideoData(state, action: PayloadAction<string>) {
      state.loading = true;
      state.correctUrl = null;
    },
    // 비디오 1개 정보 받아오기 성공
    getVideoDataSuccess(state, action: PayloadAction<VideoData>) {
      state.loading = false;
      state.correctUrl = true;
      state.videoData = action.payload;
    },
    // 비디오 1개 정보 받아오기 실패
    getVideoDataFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.correctUrl = false;
    },

    // 최근 공부한 영상 1개 정보 받아오기 요칭
    getRecentVideoData(state) {
      state.loading = true;
    },
    // 최근 공부한 영상 1개 정보 받아오기 성공
    getRecentVideoDataSuccess(state, action: PayloadAction<RecentVideoData>) {
      // console.log('정보 받아오기 성공! video-slice에서 주석처리해주세요');
      // console.log(action.payload);
      state.loading = false;
      state.recentVideoData = action.payload;
    },
    // 최근 공부한 영상 1개 정보 받아오기 실패
    getRecentVideoDataFailed(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    // 추천 비디오 4개 정보 받아오기 요청
    getRecommendVideos(state) {
      state.loading = true;
    },
    // 추천 비디오 4개 정보 받아오기 성공
    getRecommendVideosSuccess(state, action: PayloadAction<RecommendVideos[]>) {
      // console.log(action.payload);
      state.loading = false;
      state.recommendVideoList = action.payload;
    },
    // 추천 비디오 4개 정보 받아오기 실패
    getRecommendVideosFailed(state, action: PayloadAction<string>) {
      state.loading = false;
    },
  },
});

// Actions
export const videoActions = videoSlice.actions;

// Reducers
const videoReducer = videoSlice.reducer;
export default videoReducer;