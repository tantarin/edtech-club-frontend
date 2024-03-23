import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import IUser from "../../types/user.type";
import { urls } from "../../config/config";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "О клубе",
    href: urls.about,
  },
  {
    name: "Мероприятия",
    href: urls.news,
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
    name: "Дайджест",
    href: urls.digest,
  },
  {
    name: "Банк знаний",
    href: urls.ads,
  },
];

type HeaderProps = {
  currentUser: IUser | undefined;
  logOut: () => void;
};

export default function Header(props: HeaderProps) {
  const { currentUser, logOut } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F1727]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Popover.Group className="hidden items-center lg:flex lg:gap-x-6">
          <Link
            to={urls.main}
            className="text-[20px] text-gray hover:text-gray hover:no-underline"
          >
            EdTech Startup Club
          </Link>
          {pages.map(page => (
            <Link
              key={page.href}
              className="text-sm font-semibold leading-6 text-white"
              to={page.href}
            >
              {page.name}
            </Link>
          ))}
        </Popover.Group>
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
              className="text-sm font-semibold leading-6 text-white"
            >
              Вход <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to={urls.main} className="text-[20px] text-gray">
                  EdTech Startup Club
                </Link>
                {pages.map(page => (
                  <Link
                    key={page.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    to={page.href}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {currentUser ? (
                  <div>
                    <Link to={urls.profile}> {currentUser.username || "Testirovchik"}</Link>
                    <button onClick={logOut}>Выход</button>
                  </div>
                ) : (
                  <Link to="/login" className="text-sm font-semibold leading-6 text-white">
                    Вход <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
              <li className="py-6">
                <Link to={urls.register} className="text-sm font-semibold leading-6 text-white">
                  Регистрация <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
