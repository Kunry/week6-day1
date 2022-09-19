/**
 * El componete recibe como parámetro props
 */

const Person = (props) => {
  return (
    <div key={props.name}>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <p>{props.address}</p>
    </div>
  );
};

export default Person;
