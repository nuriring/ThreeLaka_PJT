import { ReactNode } from 'react';

export interface learningRecordData {
  learningRecordId: number;
  userId: number;
  videoId: string;
  stage: string;
  date: string;
}

// 영상 정보
export interface VideoData {
  video: {
    videoId: string;
    title: string;
    description: string;
    korScript: boolean;
  };
  learning_record: learningRecordData[];
}

// 최근 영상 정보
export interface RecentVideoData {
  learningRecord: {
    date: string;
    learningRecordId: number;
    stage: string;
    userId: number;
    videoId: string;
  };
  video: {
    title: string;
    videoId: string;
    description: string;
    korScript: boolean;
  };
}

// 추천 영상 리스트
export interface RecommendVideos {
  videoId: string;
  title: string;
  description: string;
  korScript: boolean;
}

// VideoData 띄우는 모달의 타입
export interface VideoDataModalType {
  isOpenModal: boolean;
  toggle: () => void;
  videoData: VideoData;
  learningRecord: {
    date: string;
    learningRecordId: number;
    stage: string;
    userId: number;
    videoId: string;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
