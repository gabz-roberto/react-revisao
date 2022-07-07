import Layout from "../components/Layout";

const jsx = (props) => {
    const num1 = 7;
    const num2 = 3;

    const pessoa = { nome: "Gabriel", idade: 25 }

    return (
        <Layout title="JSX">
            {`${num1} + ${num2} = ${num1 + num2}`}
            <p>{JSON.stringify(pessoa)}</p>
        </Layout>
    )
}

export default jsx;