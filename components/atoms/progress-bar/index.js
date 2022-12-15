import { useCallback, useRef, useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";

import Markup from "./markup";

const isFront = typeof window !== "undefined";

export default function ProgressBar({ progressPercent, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [xPosDelta, setXPosDelta] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const progressBar = useRef();
  const progressBarMeasurements = useRef();

  const stopDraggingElement = useCallback(() => {
    if(!isFront) return;
    window.document.onmouseup = null;
    window.document.onmousemove = null;
    setXPosDelta(0);
    setCursorX(0);
    setIsDragging(false);
  }, [setXPosDelta, setIsDragging]);

  const dragElement = useCallback((e) => {
    setXPosDelta(e.clientX - cursorX);
    setCursorX(e.clientX);
  }, [setXPosDelta, setCursorX, cursorX]);

  const handleMove = useCallback((e) => {
    e.preventDefault();
    setCursorX(e.clientX);
    setIsDragging(true);
    window.document.onmouseup = stopDraggingElement;
    window.document.onmousemove = dragElement;
  }, [dragElement, stopDraggingElement, setCursorX]);

  const leftPosition = useMemo(() => {
    const progressPercentStyle = `${progressPercent}%`;

    if(!isFront) return progressPercentStyle;
    if(!isDragging) return progressPercentStyle;
    if(!progressBar.current) return progressPercentStyle;
    
    const { offsetWidth, leftOffset } = progressBarMeasurements.current;
                          
    if(xPosDelta <= leftOffset) return `0%`;
    if(xPosDelta >= offsetWidth + leftOffset) return `100%`;

    return `${xPosDelta - leftOffset}px`;

  }, [isDragging, progressPercent, xPosDelta]);

  useEffect(() => {
    if(!isFront) return;
    if(!progressBar.current) return;

    const setProgressBarMeasurements = () => {
      progressBarMeasurements.current = {
        leftOffset: progressBar.current.getBoundingClientRect().left,
        offsetWidth: progressBar.current.offsetWidth
      }
    }

    setProgressBarMeasurements();

    window.addEventListener('resize', setProgressBarMeasurements);
    
    return () => {
      window.removeEventListener('resize', setProgressBarMeasurements);
    }
  }, []);

  return (
    <Markup
      ref={progressBar}
      progressPercentLeftPosition={leftPosition}
      onChange={onChange}
      onMouseDown={handleMove}
    />
  );
}
