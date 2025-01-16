import { DrawerProps as MUIDrawerProps } from '@mui/material';
import { ReactNode } from 'react';

export interface DrawerProps extends MUIDrawerProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}