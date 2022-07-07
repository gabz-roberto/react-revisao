import { useRouter } from 'next/router'

import Layout from "../../../components/Layout";

const Company = (props) => {
    const router = useRouter()

    return (
        <Layout title="Navegação Dinâmica #02">
            <p>ID: {router.query.id}</p>
            <p>Local: {router.query.company}</p>
        </Layout>
    )
}

export default Company;