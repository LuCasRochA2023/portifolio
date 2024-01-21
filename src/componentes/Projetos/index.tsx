import styles from './styles.module.scss'
import ftw from './ftw.png'
import { Loader } from '../Loader'
const Projetos=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.tituloDiv}>
                <h1>Projetos</h1>
            </div>
            <section className={styles.sessao}>
                
                <div className={styles.containerFtw}>
                    <h2>FTW</h2>
                    <h3 className={styles.texto}> Aplicação com informações sobre a empresa FTW soluções automotivas, localizada em Porto Alegre - RS. Está aplicação foi adaptada e funciona apenas para fins de testes baseada em um projeto da Alura.</h3>
                    <a href='https://ftw-new.vercel.app'>
                    <p className={styles.p}>https://ftw-new.vercel.app</p>
                    </a>
                </div>
                <img className={styles.imagem} src={ftw} alt='imagem do site ftw'/>
                
            </section>
            <div className={styles.sessaoDois}>
                <h2 className={styles.tituloDois}>Mais projetos ainda serão publicados...</h2>
                <Loader/>
            </div>
        </div>
    )
}
export default Projetos