import Options from "../options";

import styles from "./styles.module.scss";

export default function Markup({ options, onChange, selectedOption, name }) {
  return (
    <div className={`${styles.wrapper}`}>
      {options.map(({ id, label }) => {
        return (
          <Options
            key={id}
            name={name}
            value={id}
            onChange={() => {
              onChange(id);
            }}
            label={label}
            checked={id === selectedOption}
            className={styles.option}
          />
        );
      })}
    </div>
  );
}
