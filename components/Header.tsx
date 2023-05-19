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
    <div class="bg-black w-full flex flex-row justify-center py-6">
      <div class="max-w-screen-lg flex flex-row justify-between">
        <div class="flex items-center flex-1">
          <img src="/logo.png" width="40" height="40" />
          <div class="text-white text-2xl  ml-1 font-bold">
            Pranav's Site
          </div>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
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
