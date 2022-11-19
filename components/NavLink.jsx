import { useState } from "react";

export default function NavLink(props) {
  const [open, setOpen] = useState(false);
  const iconHandler = () => {
    if (open) {
      return <IconUp />;
    } else {
      return <IconDown />;
    }
  };
  return (
    <li className="cursor-pointer relative">
      <div
        className="hover:text-slate-900 flex items-center"
        onClick={() => setOpen(!open)}
      >
        {props.text}
        {props.dropdown && iconHandler()}
      </div>
      {open && props.children}
    </li>
  );
}

const IconUp = () => {
  return <img className="ml-2" src="/images/icon-arrow-up.svg" />;
};

const IconDown = () => {
  return <img className="ml-2" src="/images/icon-arrow-down.svg" />;
};
