import { Container } from './components/Container';
import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';

export function App() {
    return (
        <>
            <Container>
                <Heading>Testando meu componente Heading!</Heading>
                <section>
                    Logo
                </section>
            </Container>
            <Container>
                <section>
                    Menu
                </section>
            </Container>
        </>
    )
};
