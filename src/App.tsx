import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './style/theme.css';
import './style/global.css';

export function App() {
    return (
        <>
            <Heading>
                Olá mundo!
                <button>
                    <TimerIcon />
                </button>    
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta earum! Quidem quo odio excepturi harum, natus aut illum! Atque, amet rerum pariatur laudantium possimus dolore error molestiae adipisci nulla?</p>
        </>
    )
};
