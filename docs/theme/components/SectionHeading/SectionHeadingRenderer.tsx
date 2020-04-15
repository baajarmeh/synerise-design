import React from 'react';
import cx from 'clsx';
import Heading from 'rsg-components/Heading';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color, space }: Rsg.Theme): object => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: space[1],
  },
  toolbar: {
    marginLeft: 'auto',
  },
  sectionName: {
    display: 'inline-block',
    '&:hover, &:active': {
      isolate: false,
    },
  },
  isDeprecated: {
    color: color.light,
    '&, &:hover': {
      textDecoration: 'line-through',
    },
  },
});

interface SectionHeadingRendererProps extends JssInjectedProps {
  children?: React.ReactNode;
  toolbar?: React.ReactNode;
  id: string;
  href: string;
  depth: number;
  deprecated?: boolean;
}

const SectionHeadingRenderer: React.FunctionComponent<SectionHeadingRendererProps> = ({
                                                                                        classes,
                                                                                        children,
                                                                                        toolbar,
                                                                                        id,
                                                                                        depth,
                                                                                        deprecated,
                                                                                      }) => {
  const headingLevel = Math.min(6, depth);
  const sectionNameClasses = cx(classes.sectionName, {
    [classes.isDeprecated]: deprecated,
  });

  return (
    <div className={classes.wrapper}>
      <Heading level={headingLevel} id={id}>
        <span className={sectionNameClasses}>
          {children}
        </span>
      </Heading>
      <div className={classes.toolbar}>{toolbar}</div>
    </div>
  );
};

export default Styled<SectionHeadingRendererProps>(styles)(SectionHeadingRenderer);
