import { Link } from "react-router-dom";
import { urls } from "../../config/config";
import { Button } from "@mui/material";
import IUser from "../../types/user.type";

type HeaderProps = {
  currentUser: IUser | undefined;
  logOut: () => void;
};
export default function Header(props: HeaderProps) {
  const { currentUser, logOut } = props;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-zinc-900 d-flex justify-content-between">
      <Link to={urls.main} className="navbar-brand">
        EdTech Startup Club
      </Link>
      <div className="navbar-nav">
        <li className="nav-item">
          <Link to={urls.about} className="nav-link">
            О клубе
          </Link>
        </li>

        <li className="nav-item">
          <Link to={urls.news} className="nav-link">
            Мероприятия
          </Link>
        </li>

        <li className="nav-item">
          <Link to={urls.ads} className="nav-link">
            Поиск команды
          </Link>
        </li>

        <li className="nav-item">
          <Link to={urls.ads} className="nav-link">
            Акселератор
          </Link>
        </li>

        <li className="nav-item">
          <Link to={urls.ads} className="nav-link">
            Дайджест
          </Link>
        </li>

        <li className="nav-item">
          <Link to={urls.ads} className="nav-link">
            Банк знаний
          </Link>
        </li>
      </div>

      {currentUser ? (
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to={urls.profile} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href={urls.login} className="nav-link" onClick={logOut}>
              Выход
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={urls.login} className="nav-link">
              <Button variant="outlined">Вход</Button>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={urls.register} className="nav-link">
              <Button variant="outlined">Регистрация</Button>
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}
