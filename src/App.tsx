import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { TaskForm } from './components/TaskForm';
import { Footer } from './components/Footer';

import './style/theme.css';
import './style/global.css';

export function App() {
    return (
        <>
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
