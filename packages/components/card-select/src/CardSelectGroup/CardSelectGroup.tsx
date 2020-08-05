import * as React from 'react';

import * as S from './CardSelectGroup.styles';

interface CardSelectGroupProps {
  className?: string;
  children: React.ReactNode;
  width?: 'small'|'large';
  columns?: number;
}

const CardSelectGroup: React.FC<CardSelectGroupProps> = ({ className, children,width='large', columns = 2 }) => {
  return (
    <S.Container className={className} width={width} columns={columns} >
      {children}
    </S.Container>
  );
};

export default CardSelectGroup;