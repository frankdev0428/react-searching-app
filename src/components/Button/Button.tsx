import styles from './Button.module.css';
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick , color = "primary"}: Props) => {
  return (
    <>
     <button className={[styles.btn, styles['btn-' + color]].join(' ')}>This is Button</button>
    </> 
    )

}

export default Button;