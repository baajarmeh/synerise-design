import * as React from 'react';
import { CameraM, CameraS } from '@synerise/ds-icon/dist/icons';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import Icon from '@synerise/ds-icon';
import { AvatarProps } from 'Avatar.types';
import Avatar from '../Avatar';

const ProductAvatar: React.FC<Pick<AvatarProps, 'size' | 'src'>> = ({ size, src }) => (
  <Avatar
    iconComponent={<Icon component={size === 'small' ? <CameraS/> : <CameraM />} color={theme.palette['grey-500']} />}
    shape="square"
    backgroundColor="grey"
    backgroundColorHue="050"
    size={size}
    src={src}
  />
);

export default ProductAvatar;
