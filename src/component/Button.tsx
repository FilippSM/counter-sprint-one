import styles from './styles.module.css'; 

type ButtonPropsType = {
    callBack: () => void
    name: string
    disabled: boolean
};


export const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={styles.button}
            onClick={props.callBack}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    );
}
