import { useState } from 'react';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { TaskForm } from './components/TaskForm';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';

export function App() {
    const [number, setNumber] = useState(() => {
        //Lazy inicialization (pesado para inicializar)
        return 0;
    });

    function handlerClick() {
        setNumber(prevState => prevState + 1);
    };

    return (
        <>
            <Heading>Número { number }!</Heading>
            <button onClick={ handlerClick }>Aumenta o número</button>

            <Container>
                <Logo />
            </Container>

            <Container>
               <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <TaskForm />
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
};
