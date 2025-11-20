import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, postIndex } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { useEffect } from 'react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { useLang } from '@/hooks/useLang';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/en/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Posts',
        href: '/en/posts',
        icon: BookOpen,
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];


export function AppSidebar() {
	const { __ } = useLang();
	mainNavItems[0].title = __('dashboard.dashboard')
	mainNavItems[0].href = "/dashboard?lang=" + __('dashboard.lang')
	mainNavItems[1].title = __('posts.posts')
	mainNavItems[1].href = "/posts?lang=" + __('posts.lang')
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={`/?lang=${__('dashboard.lang')}`} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
