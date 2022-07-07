import Layout from "../components/Layout";

export async function getStaticProps() {
  return {
    props: {
      num: Math.random(),
    },
  };
}

const estatico = (props) => {
  return (
    <Layout title="Geração Estática">
      <h4>{props.num}</h4>
    </Layout>
  );
};

export default estatico;

// Para evitar conflitos de geração de conteúdo por JS no server e no cliente, usa-se a função getStaticProps
