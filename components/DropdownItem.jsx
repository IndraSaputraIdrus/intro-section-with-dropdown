export default function DropdownItem(props) {
  return (
    <>
      {props.icon && <img className="scale-110 mb-1 mr-5" src={props.icon} />}
      <div>{props.text}</div>
    </>
  );
}
