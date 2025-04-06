import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function TaskForm() {
    return <form className={ styles.form } action="">
        <div className={ styles.formRow }>
            <DefaultInput id='taskInput' labelText='task' type='text' placeholder='Digite algo'/>
        </div>

        <div className={ styles.formRow }>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={ styles.formRow }>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0 0 0 0 0 0</p>
        </div>

        <div className={ styles.formRow }>
            <button>Enviar</button>
        </div>
    </form>
};
