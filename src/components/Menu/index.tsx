import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

type AvaiLabelThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaiLabelThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    return <nav className={ styles.menu }>
        <a className={ styles.menuLink } href="#" aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon />
        </a>

        <a className={ styles.menuLink } href="#" aria-label='Ver Histórico' title='Ver Histórico'>
            <HistoryIcon />
        </a>

        <a className={ styles.menuLink } href="#" aria-label='Ir para as Configurações' title='Ir para as Configurações'>
            <SettingsIcon />
        </a>

        <a className={ styles.menuLink } href="#" aria-label='Alternar tema da página' title='Alternar tema da página' onClick={ handleThemeChange }>
            <SunIcon />
        </a>
    </nav>
};
