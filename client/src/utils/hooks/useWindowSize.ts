import { useEffect, useState } from 'react';

export default function useWindowSize(): [number, number] {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      if (width !== currentWidth) {
        setWidth(currentWidth);
      }

      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return [width, height];
}
