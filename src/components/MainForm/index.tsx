import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

import styles from './styles.module.css';

export function MainForm({ state }: HomeProps) {
    return <form className={ styles.form } action="">
        <div className={ styles.formRow }>
            <DefaultInput 
                id='taskInput' 
                labelText='task' 
                type='text' 
                placeholder='Digite algo'
            />
        </div>

        <div className={ styles.formRow }>
            <p>Próximo intervalo é de { state.config.workTime }min.</p>
        </div>

        <div className={ styles.formRow }>
            <Cycles />
        </div>

        <div className={ styles.formRow }>
            <DefaultButton icon={ <PlayCircleIcon /> } color='green'/>
        </div>
    </form>
};
