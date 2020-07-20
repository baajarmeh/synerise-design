import * as React from 'react';
import { ListType } from '../ManageableList.types';
import ContentItem from './ContentItem/ContentItem';
import SimpleItem from './SimpleItem/SimpleItem';
import FilterItem from './FilterItem/FilterItem';

type Props = {
  item: ItemProps;
  onRemove?: (removeParams: { id: string }) => void;
  onSelect: (selectParams: { id: string }) => void;
  onUpdate?: (updateParams: { id: string; name: string }) => void;
  onDuplicate?: (duplicateParams: { id: string }) => void;
  draggable?: boolean;
  changeOrderDisabled?: boolean;
  greyBackground?: boolean;
  listType: string;
  selected: boolean;
  searchQuery?: string;
  texts: {
    [k: string]: string | React.ReactNode;
  };
  onExpand?: (id: string, isExpanded: boolean) => void;
  hideExpander?: boolean;
  expanded?: boolean;
};

export type ItemProps = {
  id: string;
  canUpdate?: boolean;
  canDelete?: boolean;
  canDuplicate?: boolean;
  name: string;
  description?: string;
  tag?: React.ReactElement;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  changeOrderDisabled?: boolean;
  user?: {
    avatar_url?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
  };
  created?: string;
  dropdown?: React.ReactElement;
  disableExpanding?: boolean;
  expanded?: boolean;
};

const Item: React.FC<Props> = ({
  item,
  onRemove,
  onSelect,
  onUpdate,
  listType,
  onDuplicate,
  greyBackground,
  draggable,
  changeOrderDisabled,
  selected,
  texts,
  searchQuery,
  hideExpander,
  expanded,
  onExpand,
}) => {
  switch (listType) {
    case ListType.CONTENT:
      return (
        <ContentItem
          key={`item-${item.id}`}
          item={item}
          onDuplicate={onDuplicate}
          onUpdate={onUpdate}
          onRemove={onRemove}
          greyBackground={greyBackground}
          changeOrderDisabled={changeOrderDisabled}
          draggable={draggable}
          hideExpander={hideExpander}
          texts={texts}
          expanded={expanded}
          onExpand={onExpand}
        />
      );
    case ListType.FILTER:
      return (
        <FilterItem
          key={`item-${item.id}`}
          item={item}
          greyBackground={greyBackground}
          onSelect={onSelect}
          onDuplicate={onDuplicate}
          onRemove={onRemove}
          onUpdate={onUpdate}
          selected={selected}
          texts={texts}
          searchQuery={searchQuery}
        />
      );

    default:
      return (
        <SimpleItem
          key={`item-${item.id}`}
          item={item}
          onSelect={onSelect}
          onUpdate={onUpdate}
          onRemove={onRemove}
          texts={texts}
        />
      );
  }
};

export default Item;
