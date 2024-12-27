type TabloPropsType = {
    currentCount: number
    maxCount: number
};


export const Tablo = (props: TabloPropsType) => {

    return (
        <div  
            style={{textAlign: 'center', width: '100%'}} 
            className={props.currentCount >= props.maxCount ? "disabled" : ""}
        >
            {props.currentCount}
        </div>
    )
}