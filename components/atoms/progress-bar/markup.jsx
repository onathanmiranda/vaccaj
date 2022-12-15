import { forwardRef } from 'react';

import styles from './styles.module.scss';

function Markup(props, ref){
  
  const { progressPercentLeftPosition, onMouseDown } = props;

  return (
    <div ref={ref} className={styles.bar}>
      <svg 
        className={styles.svg}
        style={{ left: progressPercentLeftPosition }}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 47.16 24"
        onMouseDown={onMouseDown}
      >
        <path 
          d="M41.16,6.15h0c-6.48,0-10.23-3.96-12.45-5.01-1.55-.73-3.29-1.14-5.12-1.14s-3.57,.41-5.12,1.14c-2.21,1.04-6,5-12.48,5h0c-3.31,0-6,2.69-6,6s2.69,6,6,6h0c6.48,0,10.25,3.66,12.46,4.71,1.55,.73,3.29,1.14,5.12,1.14s3.57-.41,5.12-1.14c2.21-1.05,5.99-4.71,12.46-4.71h0c3.31,0,6-2.69,6-6s-2.69-6-6-6Z"
        />
        <circle 
          className={styles.circle}
          cx="23.58" 
          cy="12.18" 
          r="5.97"
        />
      </svg>
    </div>
  );
}

export default forwardRef(Markup);