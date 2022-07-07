import Navigator from '../components/Navigator';

const Home = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap',
        }}>
            <Navigator para="/comestilo" text="Componenete Com estilo" color="#7D6CD9"/>
            <Navigator para="/home" text="Home" color="#428C3F"/>
            <Navigator para="/jsx" text="JSX" color="#D9A782"/>
            <Navigator para="/navigation" text="Navegação #01" color="#5AC7B6"/>
            {/* Um arquivo index.jsx pode ser utilizado para ser referenciado dentro de uma pasta, bastando informar a pasta de local */}
            <Navigator para="/client/123" text="Navegação #02" color="#3D54B3"/>
            <Navigator para="/location/77/SP" text="Navegação #02" color="#b33d3d"/>
            <Navigator para="/estado" text="Componente com Estado" color="#68187c"/>
            <Navigator para="/integration" text="Integração com Back-end" color="#2a187c"/>
            <Navigator para="/estatico" text="Geração Estática" color="#7c1818"/>
        </div>
    )
}

export default Home;