import {
  DialogActions,
  DialogContent,
  DialogTitle,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SwipeableDrawerProps as MUIDrawerProps } from '@mui/material';
import { ReactNode } from 'react';

import { useResizableDrawer } from './hooks/useResizableDrawer';
import Dragger from './subcomponents/Dragger';

interface ResizableDrawerProps extends MUIDrawerProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  startPosition?: number;
  minSize?: number;
  maxSize?: number;
  draggerIcon?: ReactNode;
  draggerClassName?: string;
  paperClassName?: string;
}

export const ResizableDrawer = ({
  open,
  onClose,
  onOpen,
  className,
  anchor = 'right',

  children,
  header,
  footer,

  startPosition = document.body.offsetWidth * 0.4,
  minSize = 350,
  maxSize = document.body.offsetWidth - 100,

  draggerIcon,
  draggerClassName,
  paperClassName,
}: ResizableDrawerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dragOrientation = anchor === 'left' || anchor === 'right' ? 'horizontal' : 'vertical';

  const [drawerSize, handleMouseDown] = useResizableDrawer(
    startPosition ?? document.body.offsetWidth * 0.6,
    minSize,
    maxSize ?? document.body.offsetWidth - 100,
    anchor,
  );

  return (
    <SwipeableDrawer
      className={className}
      PaperProps={{
        classes: { root: paperClassName },
        style:
          dragOrientation === 'horizontal'
            ? { width: `${drawerSize}px`, overflow: 'hidden' }
            : { height: `${drawerSize}px`, overflow: 'hidden' },
      }}
      anchor={anchor}
      onOpen={onOpen}
      onClose={onClose}
      open={open}
      allowSwipeInChildren={true}
      swipeAreaWidth={isMobile ? 25 : 0}
      ModalProps={{
        keepMounted: true,
        disableScrollLock: true,
      }}
    >
      {header && <DialogTitle>{header}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {footer && <DialogActions>{footer}</DialogActions>}
      {!isMobile && (
        <Dragger
          handleMouseDown={handleMouseDown}
          anchor={anchor}
          draggerClassName={draggerClassName}
          draggerIcon={draggerIcon}
        />
      )}
    </SwipeableDrawer>
  );
};
