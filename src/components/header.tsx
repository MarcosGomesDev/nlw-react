import Icon from "../assets/icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Icon} alt="Logo" />
      <nav className="flex items-center gap-5">
        <NavLink href="">Eventos</NavLink>
        <NavLink href="">Participantes</NavLink>
      </nav>
    </div>
  );
}
