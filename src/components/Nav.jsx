import { navigationDataMenu } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationDataMenu.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
