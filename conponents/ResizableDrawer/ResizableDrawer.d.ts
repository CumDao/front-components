import { SwipeableDrawerProps as MUIDrawerProps } from '@mui/material';
import { ReactNode } from '../../../node_modules/react';
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
export declare const ResizableDrawer: ({ open, onClose, onOpen, className, anchor, children, header, footer, startPosition, minSize, maxSize, draggerIcon, draggerClassName, paperClassName, }: ResizableDrawerProps) => import("react/jsx-runtime").JSX.Element;
export {};
