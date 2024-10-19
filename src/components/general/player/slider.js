import { useRef, useContext } from 'react';
import { PlayerContext } from '@/context/player';

function Slider({ className }) {
  const { state, pause, play, updateAudioTime } = useContext(PlayerContext);
  const trackRef = useRef(null);
  const handleRef = useRef(null);

  const updatePosition = (newPosition) => {
    const trackWidth = trackRef.current.offsetWidth;
    const handleWidth = handleRef.current.offsetWidth;
    const maxPosition = trackWidth - handleWidth;
    const validPosition = Math.min(Math.max(0, newPosition), maxPosition);
    const percentage = (validPosition / maxPosition) * 100;
    updateAudioTime(percentage);
  };

  const startDrag = (e) => {
    pause();
    const startMouseX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const startPos = state.audioPercent / 100 * (trackRef.current.offsetWidth - handleRef.current.offsetWidth);

    const onDragging = (moveEvent) => {
      const mouseX = moveEvent.type.includes('mouse') ? moveEvent.clientX : moveEvent.touches[0].clientX;
      const diffX = mouseX - startMouseX;
      updatePosition(startPos + diffX);
    };

    const stopDrag = () => {
      play();
      document.removeEventListener('mousemove', onDragging);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', onDragging);
      document.removeEventListener('touchend', stopDrag);
    };

    document.addEventListener('mousemove', onDragging);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', onDragging, { passive: false });
    document.addEventListener('touchend', stopDrag);
  };

  const handleClick = (e) => {
    const newMouseX = e.clientX - trackRef.current.getBoundingClientRect().left; // Relative mouse X position inside the track
    updatePosition(newMouseX);
  };

  const handleTouch = (e) => {
    const touchX = e.touches[0].clientX - trackRef.current.getBoundingClientRect().left; // Relative touch X position inside the track
    updatePosition(touchX);
  };

  return (
    <div
      ref={trackRef} 
      className={`group w-full relative cursor-pointer ${className}`}
      onClick={handleClick}
      onTouchStart={handleTouch}
    >
      <div 
        className={`bg-zinc-800 absolute w-full h-2 group-hover:h-2 transition-[height] duration-500 relative`}
      >
        <button
          ref={handleRef}
          className={`bg-zinc-50 rounded-full h-2 w-2 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer`}
          style={{left: `${state.audioPercent}%`}}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        />
      </div>
    </div>
  );
}

export default Slider;