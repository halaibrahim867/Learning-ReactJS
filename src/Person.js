// the name of props should be camelCase
export default function Person({ name, email, children }) {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h3>1999</h3>
        <hr />
        <p>{children}</p>
      </div>
    </>
  );
}
