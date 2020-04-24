import * as React from 'react';
import Icon from '@synerise/ds-icon';
import { AngleDownS } from '@synerise/ds-icon/dist/icons';
import * as S from './Expander.styles';

export enum ExpanderSize {
  'S' = 24,
  'M' = 32,
}

export interface ExpanderProps {
  onClick: () => void;
  size: ExpanderSize;
  disabled: boolean;
  pressed: boolean;
  expanded: boolean;
}

const Expander: React.FC<ExpanderProps> = ({ size, expanded, disabled, onClick }) => {
  const defaultExpandedValue = expanded;
  const [pressed, setPressed] = React.useState(false);
  const [isExpanded, setExpanded] = React.useState(defaultExpandedValue || false);
  return (
    <S.Expander
      onClick={onClick}
      size={ExpanderSize[size]}
      className="ds-expander"
      onMouseDown={(): void => {
        setPressed(true);
        setExpanded(!isExpanded);
      }}
      onMouseUp={(): void => {
        setPressed(false);
      }}
      onMouseLeave={(): void => {
        setPressed(false);
      }}
      pressed={pressed}
      expanded={isExpanded && !disabled}
      disabled={disabled}
    >
      <Icon component={<AngleDownS />} />
    </S.Expander>
  );
};
export default Expander;
