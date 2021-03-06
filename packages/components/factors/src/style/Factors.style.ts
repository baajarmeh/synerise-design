import styled from 'styled-components';
import { InputGroup } from '@synerise/ds-input';
import { FactorInput } from '../FactorValue/FactorValue.style';

// eslint-disable-next-line import/prefer-default-export
export const Group = styled(InputGroup)<{ withoutTypeSelector: boolean }>`
  && {
    ${FactorInput} {
      width: auto;
      display: inline-flex;
      > * {
        border-radius: ${(props): string => (props.withoutTypeSelector ? '3px' : '0 3px 3px 0')};
      }
    }
  }
`;
