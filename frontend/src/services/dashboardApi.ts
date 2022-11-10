import customAxios from './customAxios';
import { VideoData, RecommendVideos } from '../models';
import { RecentVideos } from '../models/dashboard';
// // 비디오 조회
// export const getVideoDataApi = async (url: string) => {
//   const res = await customAxios.post(`api/v1/study/video`, { url });
//   return res.data;
// };

// // 가장 최근에 공부한 영상 조회
// export const getRecentVideoDataApi = async (url: string) => {
//   const res = await customAxios.get(`/api/v1/study/video/latest`);

//   return res.data;
// };

// // 학습 영상 기반 추천
// export const getRecommendVideosApi = async (
//   recommendVideoList: Array<object>
// ): Promise<any> => {
//   const res = await customAxios.get(`api/v1/study/video/recommends`);
//   const response: RecommendVideos[] = res.data;
//   return response;
// };

// 학습 기록 없는 신규 유저가 선택한 태그 기반 추천
// export const getTagVideoAPI = async (videoId: string): Promise<VideoData[]> => {
//   return customAxios.get(`api/v1/video/recommend`);
// };

// 최근에 본 영상 리스트
export const getRecentVideosApi = async (
  recentVideoList: Array<object>
): Promise<any> => {
  const res = await customAxios.get('api/v1/dashboard/playing');
  const response: RecentVideos[] = res.data;
  return response;
};