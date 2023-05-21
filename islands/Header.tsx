import { useState } from "preact/hooks";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about_me" },
    { name: "Academics", href: "/academics" },
    { name: "Work Experience", href: "/work_experience" },
    { name: "Leadership", href: "/leadership" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Volunteering", href: "/volunteering" },
  ];
  const [links_visible, set_links_visible] = useState(false);

  return (
    <div>
      <div class="bg-black w-full flex flex-row justify-center py-4">
        <div class="w-full max-w-screen-lg flex flex-col lg:flex-row justify-center gap-x-28 gap-y-2">
          <div class="flex flex-row justify-around">
            <div class="flex flex-row items-center">
              <img src="/logo.png" width="30" height="30" />
              <div class="text-white text-lg ml-1 font-bold whitespace-nowrap">
                Pranav's Site
              </div>
            </div>
            <button
              class="lg:hidden border-gray-400 hover:border-gray-600 border-2 text-gray-400	hover:text-gray-600 focus:outline-none text-xl rounded w-10 h-8"
              onClick={() => {
                if (links_visible) {
                  set_links_visible(false);
                } else {
                  set_links_visible(true);
                }
              }}
            >
              &#9776;
            </button>
          </div>
          <ul
            class={(links_visible ? "flex" : "hidden lg:flex") +
              " flex-col lg:flex-row gap-x-4 gap-y-2 items-center"}
            id="navbar_links"
          >
            {menus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class={"whitespace-nowrap text-gray-400 hover:text-gray-600 py-1 border-gray-400" +
                    (menu.href === active ? " font-bold border-b-2" : "")}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
