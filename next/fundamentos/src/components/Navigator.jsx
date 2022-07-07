import Link from "next/link";

import navigator from "../styles/Navigator.module.css";

const Navigator = (props) => {
  return (
    <Link href={props.para} passHref>
        <div className={navigator.nav} style={{
            backgroundColor: props.color ?? 'crimson',
        }}>
          {props.text}
        </div>
    </Link>
  );
};

export default Navigator;
