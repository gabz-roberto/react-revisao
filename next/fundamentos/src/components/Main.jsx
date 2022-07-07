import main from '../styles/Main.module.css';

const Main = ({children}) => {
    return (
        <main className={main.container}>
            {children}
        </main>
    )
}

export default Main;