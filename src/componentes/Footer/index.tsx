import styles from './styles.module.scss'
import letraL from './letraL.png'
const Footer=()=>{
    return (
        <footer>
            <div className={styles.container}>
                <p>2024 - Lucas Carvalho da Rocha</p>
                <img src={letraL} alt='letra L'/>
                <p>E-mail: mrlukas2012@hotmail.com</p>
            </div>
        </footer>
    )
}
export default Footer