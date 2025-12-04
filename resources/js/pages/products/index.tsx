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
    title: 'Products',
    href: '/products',
  },
];

interface Product {
    id: string;
    name: string;
    description: string;
    price:string;
    quantityInStock:string;
}

export default function ProductIndex({ products }:Product) {
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
          <Link href={`/products/create?lang=${__('products.lang')}`} className="text-indigo-500 underline">{__('products.create')}</Link>
        </div>

        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
          <Table>
            <TableCaption>{__('products.description')}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>{__('products.name')}</TableHead>
                <TableHead>{__('products.descriptionProduct')}</TableHead>
                <TableHead>{__('products.price')}</TableHead>
                <TableHead>{__('products.quantityInStock')}</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product: Product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell><div className="w-[100px]">{product.name.slice(0, product.description.length/5)+"..."}</div></TableCell>
                  <TableCell><div className="w-[100px]">{product.description.slice(0, product.description.length/10)+"..."}</div></TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantityInStock}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                        <Link href={route('products.edit', product.id)} className="border px-2 border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-600">{__('products.editButton')}</Link>
                        <Link href={route('products.destroy', product.id)} method="DELETE" className="border border-red-500 px-2 text-red-500 hover:text-white hover:bg-red-600">{__('products.deleteButton')}</Link>
                    </div>
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
