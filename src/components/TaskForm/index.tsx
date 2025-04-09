import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';

export function TaskForm() {
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
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={ styles.formRow }>
            <Cycles />
        </div>

        <div className={ styles.formRow }>
            <DefaultButton icon={ <PlayCircleIcon /> } color='green'/>
        </div>
    </form>
};
