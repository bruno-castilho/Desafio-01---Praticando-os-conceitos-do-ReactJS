import Cipboard from '../../assets/Clipboard.svg';
import styles from './Empty.module.css'

export function Empty(){

    return (
        <div className={styles.empty}>
            <img src={Cipboard} alt="Clipboard"/>
            <p style={{fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}