import React from 'react';
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getYear,
} from '../../../utils/moment';

import { getDatesInMonthDisplay } from '../../../utils/date';
import { getMonthSet } from '../../../utils/moment';

import { DateIndicatorContainer } from '../../../styles/DashBoard/DashBoardStyle';
export interface IDateIndicatorProps {
  selectDate: Date;
  setSelectDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DateIndicator = ({ selectDate, setSelectDate }: IDateIndicatorProps) => {
  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate)
  );
  const changeDate = (e: React.MouseEvent<HTMLDivElement>, nextDate: Date) => {
    // const target = e.target as HTMLDivElement;
    setSelectDate(nextDate);
  };
  return (
    <DateIndicatorContainer>
      {datesInMonth.map((item, idx) => {
        return (
          <div
            className="date-icon"
            date-active-month={item.currentMonth.toString()}
            date-date={item.date.toString()}
            key={`date-${idx}`}
            // date-date를 getattribute하는 대신 i.date 값을 직접 넘겨주기
            onClick={(e) => changeDate(e, item.date)}
          >
            {getDayOfMonth(item.date)}
          </div>
        );
      })}
    </DateIndicatorContainer>
  );
};

export default DateIndicator;
