import { useState } from "react";
import { Link } from "react-router-dom";
import IUser from "../../types/user.type";
import { urls } from "../../config/config";

const pages = [
  {
    name: "О клубе",
    href: urls.about,
  },
  {
    name: "Поиск команды",
    href: urls.ads,
  },
  {
    name: "Акселератор",
    href: urls.accel,
  },
  {
    name: "Мероприятия",
    href: urls.news,
  },
  {
    name: "Дайджест",
    href: urls.digest,
  },
  {
    name: "Банк знаний",
    href: urls.wiki,
  },
  {
    name: "Стартапы",
    href: urls.startups,
  },
];

type HeaderProps = {
  currentUser: IUser | undefined;
  logOut: () => void;
};

export default function Header(props: HeaderProps) {
  const { currentUser, logOut } = props;
  const [navbar, setNavbar] = useState(false);

  return (
      <nav className="w-full bg-[#0F1727] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <Link
                  to={urls.main}
                  className="text-[20px] text-gray hover:text-gray hover:no-underline"
              >
                EdTech Startup Club
              </Link>
              <div className="md:hidden">
                <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                      </svg>
                  ) : (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 my-0">
              {pages.map((page, index) => (
                  <li key={index}>
                    <a href={page.href}
                        className="font-semibold text-gray-600 hover:text-blue-600 text-white dark:md:hover:bg-fuchsia-600">
                      {page.name}
                    </a>
                  </li>
              ))}
            </ul>
          <div className="hidden md:inline-block">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {currentUser ? (
                  <div className="flex gap-x-[15px]">
                    <Link
                        className="text-white hover:no-underline italic"
                        to={urls.profile}
                    >
                      {currentUser.username}
                    </Link>
                    <Link to={urls.register} className="text-sm font-semibold leading-6 text-white">
                      <button
                          onClick={logOut}
                          className="text-sm font-semibold leading-6 text-white">
                        Выход <span aria-hidden="true">&rarr;</span>
                      </button>
                    </Link>
                  </div>
              ) : (
                  <Link
                      to="/login"
                      className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                    Вход <span aria-hidden="true">&rarr;</span>
                  </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
  );
}
