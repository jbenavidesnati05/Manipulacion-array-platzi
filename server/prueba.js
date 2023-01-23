const Hello = ({ name, bar, val }) => (
    <div>
      {name ? <span> Hello {name} </span> : null}
      {bar && <span> foo = {bar} </span>}
      {val && <span> val = {val} </span>}
    </div>
  );
  
  const data = {
    bar: 4,
    val: null,
  };
  
  ReactDOM.render(
      <Hello name="World" {...data} />,
      document.getElementById("container")
  )