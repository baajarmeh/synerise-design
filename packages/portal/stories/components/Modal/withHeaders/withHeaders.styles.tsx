import styled from 'styled-components';
import DsModal from '@synerise/ds-modal';
import { ModalProps } from 'antd/lib/modal';
import { TitleContainer } from '@synerise/ds-modal/dist/Modal.styles';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const HeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderPrefix = styled.div`
  padding-right: 12px;
`;
export const HeaderPlaceholder = styled.div`
  flex: 1;
`;

export const TabsContainer = styled.div`
  width: 100%;
  padding-bottom: 1px;
`;

export const Modal = styled(DsModal)<ModalProps & { withTabs?: boolean }>`
  .ant-modal-header {
    ${props => !!props.withTabs && `padding-bottom: 0px;`}
  }
  ${TitleContainer} {
    ${props => !!props.withTabs && `align-items:flex-start`}
  }
`;

export const ContentPlaceholder = styled.div`
  width: 100%;
  height: 180px;
`;
