import { SwipeableDrawerProps as MUIDrawerProps } from '@mui/material';
import { ReactNode } from '../../../node_modules/react';
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
export declare const ResizableDrawer: ({ open, onClose, onOpen, className, children, header, footer, width, minWidth, maxWidth, draggerIcon, draggerClassName, }: ResizableDrawerProps) => import("react/jsx-runtime").JSX.Element;
export {};
