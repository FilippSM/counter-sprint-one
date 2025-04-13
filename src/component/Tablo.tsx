import styles from './styles.module.css';

type TabloPropsType = {
    currentCount: number
    maxCount: number
    message: string | number
};


export const Tablo = (props: TabloPropsType) => {
    console.log(typeof(props.message))

    return (
        <>
            <div
                style={{ textAlign: 'center', width: '100%' }}
                className={props.currentCount >= props.maxCount || props.message === "Incorrect value" ? styles.disabled : ""}
                
            >
             {/*    {props.currentCount} */}
             { typeof(props.message) === "string" ? props.message : props.currentCount
             
             }  
            
            </div>
        </>
    )
}

{/* <div className={props.message === "Incorrect value" ? styles.errorMessage : ""}></div> */}