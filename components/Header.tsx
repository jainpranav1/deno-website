import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

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

  return (
    <div class="bg-black w-full flex flex-row justify-center py-4">
      <div class="max-w-screen-lg flex flex-row justify-center gap-28">
        <div class="flex flex-row items-center flex-l">
          <img src="/logo.png" width="30" height="30" />
          <div class="text-white text-lg ml-1 font-bold whitespace-nowrap">
            Pranav's Site
          </div>
        </div>
        <ul class="flex flex-row gap-4 items-center	">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"whitespace-nowrap text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
