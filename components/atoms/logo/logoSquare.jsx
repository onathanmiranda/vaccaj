import styles from "./logoSquare.module.scss";

export default function LogoSquare({ className = "" }) {
  return (
    <svg
      className={`${styles.svg || ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 535.61 535.61"
    >
      <rect
        className={styles.background}
        width="535.61"
        height="535.61"
        rx="141.52"
      />
      <path
        className={styles.logo}
        d="M119.12,141.64c-4.05-1.12-7.92-2.78-12-4a4.68,4.68,0,0,1-3.3-4.49h0a4.69,4.69,0,0,1,4.7-4.7h63.61q28.4,0,45.08,11.75t28.68,34.7l60.37,117.17a4.7,4.7,0,0,0,8.53-.37l55-134.27a4.71,4.71,0,0,0-2.6-6.15L333.6,137.84a4.71,4.71,0,0,1-3-4.37v-.31a4.69,4.69,0,0,1,4.7-4.7H427a4.69,4.69,0,0,1,4.7,4.7v.24a4.71,4.71,0,0,1-3.05,4.4L390,152.33a4.68,4.68,0,0,0-2.7,2.62L285.39,404.23a4.69,4.69,0,0,1-4.35,2.92H270.66a4.68,4.68,0,0,1-4.17-2.53l-3.22-6.18-8.87-17L241.18,356l-16.29-31.28L206.8,290l-18.6-35.71-17.83-34.24-15.8-30.33c-6.84-13.13-12.1-27.23-20.56-39.38C131,146,122.44,142.56,119.12,141.64Z"
      />
    </svg>
  );
}
