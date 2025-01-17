import { useCallback, useState } from 'react';

export const useResizableDrawer = (
  initialSize: number,
  minSize: number,
  maxSize: number,
  anchor: 'left' | 'top' | 'right' | 'bottom' | undefined = 'right',
): [number, (e: React.MouseEvent) => void] => {
  const [drawerSize, setDrawerSize] = useState(() => initialSize);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      let newSize;

      console.log(e.clientY, document.documentElement.clientHeight)

      switch (anchor) {
        case 'left':
          newSize = e.clientX;
          break;
        case 'right':
          newSize = document.body.offsetWidth - e.clientX;
          break;
        case 'top':
          newSize = e.clientY;
          break;
        case 'bottom':
          newSize = document.documentElement.clientHeight - e.clientY;
          break;
        default:
          return;
      }

      if (newSize > minSize && newSize < maxSize) {
        setDrawerSize(newSize);
      }
    },
    [anchor, minSize, maxSize],
  );

  return [drawerSize, handleMouseDown];
};
