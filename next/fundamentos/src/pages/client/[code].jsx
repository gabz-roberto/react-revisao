import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Code = (props) => {
    const router = useRouter();

    useEffect(() => {
        console.log(router.query.code)
    }, [])

    return (
        <Layout title="Navegação Dinâmica">
            <h1>Navegação dinâmica</h1>
            <h2>Código: {router.query.code}</h2>
        </Layout>
    )
}

export default Code;

// Esse módulo consegue receber um parâmetro da URL, para isso o arquivo deve estar em volta de []