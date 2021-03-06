import * as React from 'react';
import * as S from './RangeSummary.styles';
import { RangeSummaryProps } from './RangeSummary.types';
import { DayKey } from '../TimeWindow.types';

const SPACE_UNICODE = '\u00A0';
const RangeSummary: React.FC<RangeSummaryProps> = ({
  dayKeys,
  getDayLabel,
  monthlyFilterPeriod,
  monthlyFilter,
}: RangeSummaryProps) => {
  const daysToDisplay = React.useMemo(() => {
    if (monthlyFilter && dayKeys.length > 1) {
      return <S.DayShortname>Days</S.DayShortname>;
    }
    return dayKeys.map((k: DayKey, index: number) => (
      <S.DayShortname key={k}>
        {!monthlyFilter || monthlyFilterPeriod !== 'WEEK' ? getDayLabel(k, false) : null}
        {monthlyFilter && getDayLabel(k, true)}
        {index + 1 !== dayKeys.length && `,${SPACE_UNICODE}`}
      </S.DayShortname>
    ));
  }, [dayKeys, getDayLabel, monthlyFilter, monthlyFilterPeriod]);
  return (
    <S.TitleWrapper>
      Set time for:{SPACE_UNICODE}
      {daysToDisplay}
    </S.TitleWrapper>
  );
};

export default RangeSummary;
