import styles from './styles.module.scss'
import Carrossel from '../Carrossel'
import arrowLeft from './arrow-left.png'
import arrowRight from './arrow-right.png'
import { useState } from 'react'
import certificados from "../itens.json"
import setaDP from './seta-direitaP.png'
import setaEP from './seta-esquerda.png'
const Certificados=()=>{

    const[selecionado,setSelecionado]=useState(0);
    const [rotacao,setRotacao]=useState(false);
    const passarCertificado=()=>{
        setRotacao(true)
        setTimeout(()=>{
            setSelecionado((selecionado+1)%certificados.length)
            setRotacao(false)
        },500)
    }
    const voltarCertificado=()=>{
        setRotacao(true);
        setTimeout(()=>{
            setSelecionado((selecionado-1 + certificados.length)% certificados.length);
            setRotacao(false)
        },500)
    }
    return(
        <section className={styles.certificados}>
            <div className={styles.titulo}>
                <h1>Certificates</h1>
                
            </div>
            <div className={styles.carrossel}>
            
                <button onClick={voltarCertificado} className={styles.botaoEsquerdo}>
                    <img className={styles.setaGE} src={arrowLeft} alt='seta para esquerda'/>
                    <img className={styles.setaPE} src={setaEP} alt='seta esquerda pequena'/> 
                </button>
                <Carrossel rotacao={rotacao} item={certificados[selecionado]}/>
                
                
                <button onClick={passarCertificado} className={styles.botaoDireito}>
                    <img className={styles.setaPD} src={setaDP} alt='seta direita pequena'/>
                    <img className={styles.setaGD} src={arrowRight} alt='seta para a direita'/>

                </button>
                
            </div>
            
            
        </section>
    )
}
export default Certificados