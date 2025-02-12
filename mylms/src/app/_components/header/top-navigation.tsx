"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  { title: "blog", href: "/blog" },
  { title: "Courses", href: "/courses" },
  { title: "Home", href: "/" },
];

const TopNavigation: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-x-8 ml-12">
      {menuItems.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              href={item.href}
              className={`dark:hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:border-primary/30 dark:text-primary"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
