import { boolean, select } from '@storybook/addon-knobs';
import { prefixType, renderPrefixIcon, renderSuffix, submenu, suffixType } from '../dataset';
import { attachKnobsToDataSource, decorator, getDefaultProps } from '../index.stories';
import Icon from '@synerise/ds-icon';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import { CheckS, FolderM } from '@synerise/ds-icon/dist/icons';
import Tooltip from '@synerise/ds-tooltip/dist/Tooltip';
import * as React from 'react';

const withSubmenu = () => {
  const defaultProps = getDefaultProps();
  const prefixKnob = select('Set prefix type', [prefixType.singleIcon, prefixType.none], prefixType.none);
  const suffixKnob = select('Set suffix type', [suffixType.none, suffixType.delete, suffixType.check], suffixType.none);

  const props = {
    dataSource: [
      {
        text: 'Parent 1',
        suffixel: renderSuffix(suffixKnob),
        prefixel: renderPrefixIcon(prefixKnob),
        subMenu: [
          {
            text: 'Child 1',
            suffixel: renderSuffix(suffixKnob),
            prefixel: renderPrefixIcon(prefixKnob)
          },
          { text: 'Child 2', suffixel: renderSuffix(suffixKnob), prefixel: renderPrefixIcon(prefixKnob) },
          { text: 'Child 3', suffixel: renderSuffix(suffixKnob), prefixel: renderPrefixIcon(prefixKnob) },
        ],
      },      {
        text: 'Parent 2',
        suffixel: renderSuffix(suffixKnob),
        prefixel: renderPrefixIcon(prefixKnob),
        subMenu: [
          {
            text: 'Child 1',
            suffixel: renderSuffix(suffixKnob),
            prefixel: renderPrefixIcon(prefixKnob)
          },
          { text: 'Child 2', suffixel: renderSuffix(suffixKnob), prefixel: renderPrefixIcon(prefixKnob) },
          { text: 'Child 3', suffixel: renderSuffix(suffixKnob), prefixel: renderPrefixIcon(prefixKnob) },
        ],
      },
    ],
    ordered: true,
    ...defaultProps,
  } as object;
  return decorator(props);
};
export default withSubmenu;