import { ReactNode } from '../../../../../node_modules/react';
interface DraggerProps {
    handleMouseDown: (e: React.MouseEvent) => void;
    anchor?: 'left' | 'top' | 'right' | 'bottom' | undefined;
    draggerClassName?: string;
    draggerIcon?: ReactNode;
}
declare const Dragger: ({ handleMouseDown, anchor, draggerClassName, draggerIcon, }: DraggerProps) => import("react/jsx-runtime").JSX.Element;
export default Dragger;
