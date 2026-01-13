function Son(props) {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <div style={{ background: "lightgreen" }}>
      <h2>Son</h2>
      <div>{props.children}</div>
      <button onClick={shoot}>Take the shot!</button>
    </div>
  );
}

function Daughter(props) {
  const { brand, model } = props;
  const shoot = (a) => {
    alert(a);
  }
  return (
    <div style={{ background: "lightblue" }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
        <button onClick={() => shoot("Awesome Shot!")}>Take the shot!</button>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Daughter component
        </p>
      </Daughter>
    </div>
  );
}
export default Parent;
