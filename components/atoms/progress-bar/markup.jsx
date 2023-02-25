import { forwardRef, useCallback, useEffect, useRef } from 'react';

import styles from './styles.module.scss';

const isFront = typeof window !== "undefined";

function Markup(props, ref){
  const { progressPercent, onMouseDown, onClick, progressBarWidth } = props;
  const svgRef = useRef();

  const getCustomScale = useCallback((elementSide) => {
    if(!isFront) return false;
    if(!svgRef.current) return false;
    if(!progressBarWidth) return false;
    if(!elementSide) throw new Error("missing elementSide param on getCustomScale");

    const maxLeftSVGPos = 23.5;
    const maxRightSVGPos = progressBarWidth - 47;
    const currentLeft = parseFloat(window.getComputedStyle(svgRef.current).left.replace('px'));

    if(elementSide === "left"){
      if(currentLeft > maxLeftSVGPos) return false;
      let scale = 0;
      if(currentLeft < 0) return scale;
      if(currentLeft < maxLeftSVGPos)
        scale = (currentLeft * 100 / maxLeftSVGPos) / 100;
      return scale;
    }

    if(elementSide === "right"){
      if(currentLeft < maxRightSVGPos) return false;
      /* let scale = currentLeft * 100 / maxRightSVGPos;
      console.log(scale); */
      return 0;
    }
  }, [progressBarWidth, progressPercent]);

  useEffect(() => {
    if(!isFront) return;
    const customScaleLeft = getCustomScale("left");
    const customScaleRight = getCustomScale("right");
    if(typeof customScaleLeft === "number") document.querySelector(":root").style.setProperty('--progressbar-custom-scale-left', customScaleLeft);
    if(typeof customScaleRight === "number") document.querySelector(":root").style.setProperty('--progressbar-custom-scale-right', customScaleRight);
  }, [getCustomScale]);
  
  return (
    <div ref={ref} className={styles.bar} onClick={onClick}>
      <svg 
        className={styles.svg}
        style={{ left: `calc(${progressPercent}%`}}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 47 21"
        onMouseDown={onMouseDown}
        ref={svgRef}
      >
        <path className={`${styles.customScaleLeft} ${typeof getCustomScale("left") === "number" ? styles.useCustomScale : "" }`} d="m23.5,0c-2.05,0-3.95.59-5.56,1.61h0c-2.6,1.6-5.67,2.48-8.96,2.48-.59,0-1.17.01-1.74-.04h0c-.24-.02-.49-.04-.74-.04C2.91,4,0,6.91,0,10.5s2.91,6.5,6.5,6.5c.23,0,.46-.01.69-.04h0c.59-.06,1.18-.05,1.79-.05,3.29,0,6.36.87,8.96,2.49h0c1.61,1,3.52,1.59,5.56,1.59V0Z"/>
        <path className={`${styles.customScaleRight} ${typeof getCustomScale("right") === "number" ? styles.useCustomScale : "" }`} d="m23.5,21c2.04,0,3.95-.59,5.56-1.6v.07c2.6-1.62,5.67-2.55,8.96-2.55.59,0,1.17-.02,1.74.04h0c.24.02.49.04.74.04,3.59,0,6.5-2.91,6.5-6.5s-2.91-6.5-6.5-6.5c-.23,0-.46.01-.69.04v-.05c-.59.06-1.19.09-1.79.09-3.29,0-6.36-.93-8.96-2.55v.07c-1.61-1.01-3.52-1.6-5.56-1.6v21Z"/>
      </svg>
      <svg 
        className={styles.svg}
        style={{ left: `calc(${progressPercent}%`}}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 21 21"
        onMouseDown={onMouseDown}
        ref={svgRef}
      >
        <circle className={`${styles.circleBig}`} cx="10.5" cy="10.5" r="10.5"/>
        <circle cx="10.5" cy="10.5" r="5.5"/>
      </svg>
    </div>
  );
}

export default forwardRef(Markup);