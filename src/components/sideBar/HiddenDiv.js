
import styles from './HiddenDiv.module.css'


const HiddenDiv = (props) => {

    return <div className={styles.hiddenDiv} style={{transform: `translateX(${props.placement}vw)`}}></div>


};

export default HiddenDiv;