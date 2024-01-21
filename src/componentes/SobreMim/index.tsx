import Relogio from '../Relogio'
import styles from './styles.module.scss'
const SobreMim=()=>{
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.divTitulo}>
                    <h1>Sobre mim  </h1>
                </div>
                <div className={styles.boxSobreMim}>
                    <p>Olá! Me chamo Lucas Rocha, nascido em março de 1998 faminto por tecnologia e procurando ultrapassar meus próprios conhecimentos para ser um desenvolvedor melhor. Este é meu novo projeto para mostrar algumas habilidades usando: css-modules, react e typescript. Além disso, sou um bom universitário, com média de notas um pouco acima de 8 (GPA:3.2) mais perto do que nunca a me graduar engenheiro de software. <strong>Esse é o tempo que falta para me formar:</strong>   </p>
                    <Relogio/>
                </div>
            </div>
        </section>
    )
}
export default SobreMim