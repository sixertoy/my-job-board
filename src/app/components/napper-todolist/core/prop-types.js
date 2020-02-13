import {
  arrayOf,
  bool,
  node,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

export const PlacementType = oneOf(['top', 'bottom', 'both']);

export const ThemeType = shape({
  // buttonColor: string,
  // buttonHover: string,
  // cardBackground: string,
  // cardColor: string,
  // columnBackground: string,
  // columnColor: string,
});

export const TitleType = oneOfType([string, bool]);

export const IconType = shape({
  Checked: node.isRequired,
  Unchecked: node.isRequired,
});

export const TaskType = shape({
  checked: bool.isRequired,
  id: string.isRequired,
  label: string.isRequired,
});

export const TasksType = arrayOf(TaskType);
