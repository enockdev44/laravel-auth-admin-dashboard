import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create post',
        href: '/posts/create',
    },
];

export default function PostCreate() {
	const { __ } = useLang();
	breadcrumbs[0].title = __('posts.create')
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={__('posts.create')} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
		<div className="flex justify-end">
			<Link href={`/posts?lang=${__('posts.lang')}`} className="text-indigo-500 underline">{__('posts.back')}</Link>
		</div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                </div>
            </div>
        </AppLayout>
    );
}
