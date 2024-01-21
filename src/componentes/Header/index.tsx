import styles from './styles.module.scss'
import iconeJs from './iconejs.png'
import iconeReact from './iconeReact.png'
import iconeTs from './iconeTypeScript.png'
import iconeCss from './iconeCss.png'
import IconeHtml from './iconeHtml.png'
const Header=()=>{
    return(
        
            <header className={styles.header}>
                <div className={styles.icones}>
                    <img src={IconeHtml} alt='iconeHTML'/>
                    
                    
                    <img src={iconeReact} alt='icone react' />
                    
                    <img src={iconeJs} alt='icone de js' />
                
                    <img src={iconeTs} alt='icone ts'/>

                    <img src={iconeCss} alt='icone css'/>
                    </div>
                
                <div>
                    <img className={styles.iconeJs} src={iconeJs} alt='icone js' />
                </div>
                    
                
            </header>
        
    )
}
export default Header