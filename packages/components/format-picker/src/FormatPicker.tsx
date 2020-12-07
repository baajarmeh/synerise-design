import * as React from 'react';
import Button from '@synerise/ds-button';
import Dropdown from '@synerise/ds-dropdown';
import { useIntl } from 'react-intl';
import Icon from '@synerise/ds-icon';
import { HashM } from '@synerise/ds-icon/dist/icons';
import { FormatPickerProps } from './FomartPicker.types';
import FormatSettings from './FormatSettings/FormatSettings';
import { valueFormatter } from './utils/valueFormatter';

const FormatPicker: React.FC<FormatPickerProps> = ({
  onUseSeparatorChange,
  onFixedLengthChange,
  onDataFormatChange,
  onCurrencyChange,
  onCompactNumbersChange,
  onSetDefault,
  value,
  format,
  text,
}) => {
  const intl = useIntl();

  const texts = React.useMemo(
    () => ({
      header: intl.formatMessage({ id: 'DS.FORMAT-PICKER.HEADER', defaultMessage: 'Number format' }),
      format: intl.formatMessage({ id: 'DS.FORMAT-PICKER.FORMAT', defaultMessage: 'Format' }),
      numeric: intl.formatMessage({ id: 'DS.FORMAT-PICKER.NUMERIC', defaultMessage: 'Numeric' }),
      cash: intl.formatMessage({ id: 'DS.FORMAT-PICKER.CASH', defaultMessage: 'Cash' }),
      percentage: intl.formatMessage({ id: 'DS.FORMAT-PICKER.PERCENTAGE', defaultMessage: 'Percentage' }),
      setDefault: intl.formatMessage({ id: 'DS.FORMAT-PICKER.SET-DEFAULT', defaultMessage: 'Set default' }),
      useSeparator: intl.formatMessage({ id: 'DS.FORMAT-PICKER.USE-SEPARATOR', defaultMessage: 'Use 1000 separator' }),
      compactNumbers: intl.formatMessage({
        id: 'DS.FORMAT-PICKER.COMPACT-NUMBERS',
        defaultMessage: 'Use compact numbers',
      }),
      ...text,
    }),
    [text, intl]
  );

  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <FormatSettings
          onCurrencyChange={onCurrencyChange}
          onFixedLengthChange={onFixedLengthChange}
          onDataFormatChange={onDataFormatChange}
          onCompactNumbersChange={onCompactNumbersChange}
          onUseSeparatorChange={onUseSeparatorChange}
          onSetDefault={onSetDefault}
          format={format}
          value={value}
          text={texts}
        />
      }
      placement="topCenter"
    >
      <Button type="tertiary" mode="icon-label">
        <Icon component={<HashM />} />
        {`${texts.format} ${valueFormatter({ value, formatting: format, intl })}`}
      </Button>
    </Dropdown>
  );
};
export default FormatPicker;
