import { useCallback, useState } from 'react';

export const useResizableDrawer = (
  initialWidth: number,
  minWidth: number,
  maxWidth: number,
): [number, (e: React.MouseEvent) => void] => {
  const [drawerWidth, setDrawerWidth] = useState(() => initialWidth);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const width = document.body.offsetWidth;
    const newWidth = width - e.clientX;
    if (newWidth > minWidth && newWidth < maxWidth) {
      setDrawerWidth(newWidth);
    }
  }, []);

  return [drawerWidth, handleMouseDown];
};
