const If = (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
// Se o valor de teste for true irá renderizar os childrens

export default If;
