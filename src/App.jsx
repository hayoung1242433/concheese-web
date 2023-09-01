import Nav from "../components/Nav";

export default function App({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
