import * as React from 'react';
import Dropdown from '@synerise/ds-dropdown';
import { useOnClickOutside } from '@synerise/ds-utils';
import { useIntl } from 'react-intl';
import { LogicProps, LogicSubComponents } from './Logic.types';
import * as S from './Logic.style';
import Matching from './Matching/Matching';

const DEFAULT_OPTIONS = ['AND', 'OR'];

const Logic: React.FC<LogicProps> & LogicSubComponents = ({ value, options, onChange }) => {
  const intl = useIntl();
  const [optionsVisible, setOptionsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOptionsVisible(false);
  });

  const operators = React.useMemo(() => {
    if (options !== undefined && options.length) {
      return options;
    }
    return DEFAULT_OPTIONS.map(option => ({
      value: option,
      label: intl.formatMessage({ id: `DS.LOGIC.${option}` }),
    }));
  }, [options, intl]);

  const getOptions = React.useMemo(() => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      <S.Wrapper ref={ref}>
        <S.LogicMenu asDropdownMenu>
          {operators.map(operator => (
            <S.MenuItem
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              key={operator}
              checked={operator.value === value}
              onClick={(): void => {
                setOptionsVisible(false);
                onChange(operator.value);
              }}
            >
              {operator.label}
            </S.MenuItem>
          ))}
        </S.LogicMenu>
      </S.Wrapper>
    );
  }, [onChange, operators, value]);

  const renderValue = React.useMemo(() => {
    return operators.find(option => option.value === value)?.label;
  }, [operators, value]);

  return (
    <Dropdown overlay={getOptions} visible={optionsVisible}>
      <S.Logic className="ds-logic">
        <Dropdown.TextTrigger value={renderValue} size={4} onClick={(): void => setOptionsVisible(!optionsVisible)} />
      </S.Logic>
    </Dropdown>
  );
};

Logic.Matching = Matching;

export default Logic;
