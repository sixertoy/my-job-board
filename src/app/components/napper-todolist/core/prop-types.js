import {
  arrayOf,
  bool,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

export const PlacementType = oneOf(['top', 'bottom', 'both']);

export const ThemeType = shape({
  color: string,
  progressRadius: oneOfType([number, string]),
  progressSize: oneOfType([number, string]),
  titleFontSize: oneOfType([number, string]),
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
