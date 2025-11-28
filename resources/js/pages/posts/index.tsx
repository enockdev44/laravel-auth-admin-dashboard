import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Post',
    href: '/posts',
  },
];

interface Post {
    title:string;
    content: string;
    image: string;
}

export default function PostIndex({ posts }:Post) {
  const { __ } = useLang();
  breadcrumbs[0].title = __('posts.posts')
  breadcrumbs[0].href = "/" + __('posts.lang') + "/posts"
  const title = __('posts.title')
  const content = __('posts.content')
  const image = __('posts.image')
  const author = __('posts.author')
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={__('posts.posts')} />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="flex justify-end">
          <Link href={`/posts/create?lang=${__('posts.lang')}`} className="text-indigo-500 underline">{__('posts.create')}</Link>
        </div>

        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
          <Table>
            <TableCaption>{__('posts.description')}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>{title}</TableHead>
                <TableHead>{content}</TableHead>
                <TableHead>{author}</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post: Post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.content}</TableCell>
                  <TableCell>{post.user.name}</TableCell>
                  <TableCell><img width='50' src={`/storage/${post.image}`}/></TableCell>
                  <TableCell>
                    <Link href={route('posts.edit', post.id)} className="text-indigo-500 hover:text-indigo-600">Edit/delete</Link>
                </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>

        </div>
      </div>
    </AppLayout>
  );
}
