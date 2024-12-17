import styles from './SelectInput.module.css'

export default function SelectInput({id, label, values, options, onChangeFunc}) {
    return (
      <div>
        <label htmlFor={id}><strong>{label}:</strong> </label>
        <select name={id} id={id} className={styles["selection-input"]} onChange={e => onChangeFunc(e.target.value)}>
          {options.map((option, index) => <option key={index} value={values[index]}>{option}</option>)}
        </select>
      </div>
    )
}