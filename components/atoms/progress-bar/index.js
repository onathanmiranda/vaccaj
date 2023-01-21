import { useCallback, useRef, useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";

import Markup from "./markup";

const isFront = typeof window !== "undefined";

const timeToPercent = (current, total) => Math.round(current * 100 / total * 10) / 10;
const percentToTime = (currentPercent, totalTime) => currentPercent * totalTime / 100;

export default function ProgressBar({ currentTime, recordingLength, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [xPosDelta, setXPosDelta] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const progressBar = useRef();
  const progressBarMeasurements = useRef();

  const currentProgressPercent = useMemo(() => {
    const progressPercent = timeToPercent(currentTime, recordingLength);
    if(!isFront) return progressPercent;
    if(!isDragging) return progressPercent;
    if(!progressBar.current) return progressPercent;
    
    const { offsetWidth, leftOffset } = progressBarMeasurements.current;
                          
    if(xPosDelta <= leftOffset) return 0;
    if(xPosDelta >= offsetWidth + leftOffset) return 100;

    const newPosInPx = xPosDelta - leftOffset;
    const newPos = newPosInPx * 100 / offsetWidth;

    return newPos;
  }, [currentTime, recordingLength, isDragging, xPosDelta]);

  const stopDraggingElement = useCallback(() => {
    if(!isFront) return;
    window.document.onmouseup = null;
    window.document.onmousemove = null;
    setXPosDelta(0);
    setCursorX(0);
    setIsDragging(false);
  }, [setXPosDelta, setCursorX, setIsDragging]);

  const dragElement = useCallback((e) => {
    setXPosDelta(e.clientX - cursorX);
    setCursorX(e.clientX);
  }, [cursorX]);

  const handleClick = useCallback((e) => {
    const { offsetWidth, leftOffset } = progressBarMeasurements.current;
                          
    if(e.clientX <= leftOffset) onChange(0);
    if(e.clientX >= offsetWidth + leftOffset) onChange(percentToTime(100, recordingLength));

    const newPosInPx = e.clientX - leftOffset;
    const newPos = newPosInPx * 100 / offsetWidth;
    onChange(percentToTime(newPos, recordingLength));
  }, [onChange, recordingLength]);

  const handleMove = useCallback((e) => {
    e.preventDefault();
    setCursorX(e.clientX);
    setXPosDelta(e.clientX);
    setIsDragging(true);
    window.document.onmouseup = stopDraggingElement;
    window.document.onmousemove = dragElement;
  }, [dragElement, stopDraggingElement, setCursorX]);

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
    return () => window.removeEventListener('resize', setProgressBarMeasurements);
  }, []);

  useEffect(() => {
    const progressPercent = timeToPercent(currentTime, recordingLength);
    if(progressPercent === currentProgressPercent) return;
    onChange(percentToTime(currentProgressPercent, recordingLength));
  }, [currentProgressPercent, currentTime, onChange, recordingLength]);
  
  return (
    <Markup
      ref={progressBar}
      progressPercent={currentProgressPercent}
      onMouseDown={handleMove}
      onClick={handleClick}
      progressBarWidth={progressBar.current?.offsetWidth}
    />
  );
}
