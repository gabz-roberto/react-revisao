import Link from 'next/link';
import Layout from '../components/Layout';

import styles from '../styles/ComEstilo.module.css';

const ComEstilo = (props) => {
    return (
        <Layout title="CSS Modularizado">
            <h1 className={styles.titleRed}>Componente Com Módulos de Estilo</h1>
        </Layout>
    )
}

export default ComEstilo;

// O estilo será aplicado de forma modular, nesse caso, o estilo será aplicado como um atributo de um objeto
// O seletor do CSS deve ser uma classe ou id