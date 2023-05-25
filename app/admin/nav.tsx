'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const navs = [
  {
    key: 'repositories',
    title: 'Tracking Repos',
    href: '/admin/repositories',
    public: false,
  },
  {
    key: 'dashboards',
    title: 'Dashboards',
    href: '/admin/dashboards',
    public: false,
  },
  {
    key: 'widgets',
    title: 'Widgets',
    href: '/admin/widgets',
    public: false,
  },
  {
    key: 'import',
    title: 'Import layout',
    href: '/admin/import',
    public: false,
  },
  {
    key: 'account',
    title: 'Account',
    href: '/admin/account',
    public: false,
  },
  {
    key: 'status',
    title: 'Status',
    href: '/status',
    public: true,
  },
] as const;

export default function Nav ({}: { authenticated: boolean }) {
  const [first] = useSelectedLayoutSegments();

  return (
    <NavigationMenu.Root orientation="vertical" className="nav-menu">
      <NavigationMenu.List>
        {navs.map(nav => (
          <NavigationMenu.Item key={nav.key}>
            <NavigationMenu.Link asChild active={first === nav.key}>
              <Link href={nav.href}>
                {nav.title}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}