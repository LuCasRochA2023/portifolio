import {  useEffect, useState } from 'react'
import styles from './styles.module.scss'

const Relogio: React.FC =()=>{
    const [diferenca,setDiferenca]=useState<number>(0);
    const formataNumero=(valor:number)=>{
        return valor<=9 ? `0${valor}` :valor.toString();

    }
    useEffect(()=>{
        const dataFinal=new Date('2025-11-21T00:00:00Z').getTime();

        const atualizaDiferenca=()=>{
            const data = new Date().getTime();
            const diferencaDeTempo=dataFinal-data;

            if(diferencaDeTempo>0){
               
                setDiferenca(diferencaDeTempo)
            }else{
                setDiferenca(0);
                clearInterval(intervaloId);
            }
        };

        const intervaloId=setInterval(atualizaDiferenca,1000);

        atualizaDiferenca()
        return ()=> clearInterval(intervaloId);
       
    },[])
    
  const horas = Math.floor(diferenca / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    return(
        <div className={styles.relogio}>
            <div>
                <span className={styles.numeroHoras} > {formataNumero(horas)}</span>
                <span className={styles.descricaoHoras}>Horas</span>
            </div>
            <div>
                <span className={styles.numeroMinutos}>{formataNumero(minutos)} </span>
                <span className={styles.descricaoMinutos}>Minutos</span>
            </div>
            <div>
                <span className={styles.numeroSegundos}>{formataNumero(segundos)} </span>
                <span className={styles.descricaoSegundos}>Segundos</span>
            </div>
        </div>
    )
}
export default Relogio