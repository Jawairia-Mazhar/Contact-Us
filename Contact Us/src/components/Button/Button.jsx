import styles from "./Button.module.css";

const Button = (props) => {
    const {isOutline, text, icon} = props; //Props Destructuring. Code below looks much cleaner this way.
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button