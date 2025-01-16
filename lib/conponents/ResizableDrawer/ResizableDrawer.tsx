import {
  DialogActions,
  DialogContent,
  DialogTitle,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SwipeableDrawerProps as MUIDrawerProps } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ReactNode } from 'react';

import { useResizableDrawer } from './hooks/useResizableDrawer';

import classes from './ResizableDrawer.module.css';

const MIN_WIDTH = 350;

interface ResizableDrawerProps extends MUIDrawerProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  draggerIcon?: ReactNode;
  draggerClassName?: string | undefined;
}

export const ResizableDrawer = ({
  open,
  onClose,
  onOpen,
  className,

  children,
  header,
  footer,

  width,
  minWidth,
  maxWidth,

  draggerIcon,
  draggerClassName,
}: ResizableDrawerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerWidth, handleMouseDown] = useResizableDrawer(
    width ?? document.body.offsetWidth * 0.6,
    minWidth ?? MIN_WIDTH,
    maxWidth ?? document.body.offsetWidth - 100,
  );

  return (
    <SwipeableDrawer
      className={className}
      PaperProps={{
        classes: { root: classes.paper },
        style: { width: `${drawerWidth}px` },
      }}
      anchor="right"
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
        <div onMouseDown={handleMouseDown} className={`${draggerClassName} ${classes.dragger}`}>
          {draggerIcon ?? <DragIndicatorIcon />}
        </div>
      )}
    </SwipeableDrawer>
  );
};
