import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new DOMException("Opps, some exception");
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/users"> Users </Link>
      <br />
      <Link to="/counter"> Counter </Link>
      <br />
      <Link to="/contact"> Contact </Link>
    </>
  );
};

export default HomePage;
