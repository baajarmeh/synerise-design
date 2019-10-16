import * as React from 'react';

import Divider from '@synerise/ds-divider';
import Icon from '@synerise/ds-icon';
import ArrowLeftM from '@synerise/ds-icon/dist/icons/arrow-left-m.svg';

import * as S from './BackAction.styles';

interface Props {
  label: React.ReactNode;
  onClick: () => void;
}

const BackAction: React.FC<Props> = ({ label, onClick }) => (
  <S.BackActionWrapper>
    <S.ContentWrapper onClick={onClick}>
      <S.IconWrapper>
        <Icon component={<ArrowLeftM />} />
      </S.IconWrapper>
      <S.Label>{label}</S.Label>
    </S.ContentWrapper>
    <Divider dashed style={{ margin: '0' }} />
  </S.BackActionWrapper>
);

export default BackAction;