import * as React from 'react';
import MomentLocaleUtils from 'react-day-picker/moment';
import { injectIntl } from 'react-intl';
import fnsFormat from '../../format';

import Navbar from '../Navbar/Navbar';
import { DayPicker } from './DayPicker.styles';
import * as S from '../Navbar/Navbar.styles';
import { DayPickerProps } from './DayPicker.types';
import { fnsAddYears, fnsAddMonths } from '../../fns';

const captionElement = (): null => null;

const Picker: React.FC<DayPickerProps> = props => {
  const {
    month,
    onMonthChange,
    onMonthNameClick,
    onYearNameClick,
    hideLongNext,
    hideLongPrev,
    hideShortNext,
    hideShortPrev,
    renderNavbar,
    intl,
    modifiers,
    ...rest
  } = props;

  return (
    <>
      {renderNavbar ? (
        renderNavbar(props)
      ) : (
        <Navbar
          title={
            <>
              <S.Link onClick={onMonthNameClick}>{fnsFormat(month, 'MMM', intl.locale)}</S.Link>
              {'  '}
              <S.Link onClick={onYearNameClick}>{fnsFormat(month, 'yyyy', intl.locale)}</S.Link>
            </>
          }
          onLongPrev={hideLongPrev ? undefined : (): void => onMonthChange && onMonthChange(fnsAddYears(month, -1))}
          onShortPrev={hideShortPrev ? undefined : (): void => onMonthChange && onMonthChange(fnsAddMonths(month, -1))}
          onLongNext={hideLongNext ? undefined : (): void => onMonthChange && onMonthChange(fnsAddYears(month, 1))}
          onShortNext={hideShortNext ? undefined : (): void => onMonthChange && onMonthChange(fnsAddMonths(month, 1))}
          key="head"
        />
      )}
      <DayPicker
        month={month}
        firstDayOfWeek={1}
        captionElement={captionElement}
        key="body"
        locale={intl.locale}
        localeUtils={MomentLocaleUtils}
        modifiers={modifiers}
        {...rest}
      />
    </>
  );
};
export default injectIntl(Picker);
