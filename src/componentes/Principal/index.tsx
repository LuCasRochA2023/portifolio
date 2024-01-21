import styles from './styles.module.scss'
import github from './github.png'
import instagran from './instagran.png'
import linkedin from './linkedin.png'
import logo from './vscode.png'
const Principal=()=>{
    return(
        <section className={styles.principal}>
                <div className={styles.divTexto}>
                    <h2>{"< Lucas Rocha >"}</h2>
                    <h2 className={styles.textoSecundario}>{"</ Front-End Developer  >"}</h2>
                    <div className={styles.links}>
                        <a href='https://github.com/LuCasRochA2023'>
                            <img src={github} alt='imagem github levando a minha pagina'/>
                        </a>
                        <a href='https://www.linkedin.com/in/lucas-rocha-7a887a249/' >
                            <img src={linkedin} alt='imagem linkedin levando a minha pagina'/>
                        </a>
                        <a href='https://www.instagram.com/lukascdr90s/'>
                            <img src={instagran} alt='imagem instagran levando a minha pagina'/>
                        </a>
                    </div>
                    </div>
                    <img className={styles.logo} src={logo} alt="imagem logo do vscode" />
        </section>
    )
}
export default Principal