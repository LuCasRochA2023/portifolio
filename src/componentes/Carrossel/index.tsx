import styles from './styles.module.scss'
import listaDeCertificados from '../itens.json'
import { ICarrossel } from '../types/ICarrossel'
interface carrosselProps{
    item:ICarrossel
    rotacao:boolean
}

const Carrossel=({item, rotacao}:carrosselProps)=>{
    const classes= rotacao ? { transform: 'scaleY(-1) rotateX(180deg)' } : {}
    return(
            

            
            <div className={styles.carrossel}  style={classes} key={item.id}>
                    
                <h2 className={styles.titulo}>
                    {item.titulo}
                </h2>
                <p className={styles.plataforma}>
                    {item.plataforma}
                </p>
                <p className={styles.conteudo}>
                    {item.conteudo}
                </p>
            </div>
            
    )
}
export default Carrossel