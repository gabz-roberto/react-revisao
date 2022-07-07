import Header from "../components/Header";
import Main from "../components/Main";

const Layout = (props) => {
  return (
    <>
        <Header>
            <h1>{props.title ?? "Exemplo"}</h1>
        </Header>
        <Main>
            {props.children}
        </Main>
    </>
  );
};

export default Layout;
