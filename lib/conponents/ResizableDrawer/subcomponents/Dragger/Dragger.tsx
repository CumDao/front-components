import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import classes from './Dragger.module.css';
import { ReactNode } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';

interface DraggerProps {
  handleMouseDown: (e: React.MouseEvent) => void;
  anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined;
  draggerClassName?: string;
  draggerIcon?: ReactNode;
}

const Dragger = ({
  handleMouseDown,
  anchor = 'right',
  draggerClassName,
  draggerIcon,
}: DraggerProps) => {
  let draggerStyle = '';
  switch (anchor) {
    case 'left':
      draggerStyle = `${classes.dragger} ${classes.draggerLeft}`;
      break;
    case 'top':
      draggerStyle = `${classes.dragger} ${classes.draggerTop}`;
      break;
    case 'bottom':
      draggerStyle = `${classes.dragger} ${classes.draggerBottom}`;
      break;
    default:
      draggerStyle = `${classes.dragger} ${classes.draggerRight}`;
      break;
  }

  const dragOrientation = anchor === 'left' || anchor === 'right' ? 'horizontal' : 'vertical';
  
  const defaultDragIcon =
    dragOrientation === 'horizontal' ? <DragIndicatorIcon /> : <DragHandleIcon />;

  return (
    <div onMouseDown={handleMouseDown} className={`${draggerClassName} ${draggerStyle}`}>
      {draggerIcon ?? defaultDragIcon}
    </div>
  );
};

export default Dragger;
