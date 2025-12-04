import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Post } from '@/types';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from '@/components/ui/spinner';
import { useLang } from '@/hooks/useLang';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Formulaitre du produit',
        href: '/products',
    },
];

export default function ProductEdit({ currentProduct }: { currentProduct: Product }) {
    const [ name, setName ] = useState<string>(currentProduct.name);
    const [ description, setDescription ] = useState<string>(currentProduct.description);
    const [ price, setPrice ] = useState<string>(currentProduct.price);
    const [ quantityInStock, setQuantityInStock ] = useState<string>(currentProduct.quantityInStock);
    
    const { errors } = usePage().props;
    const { __ } = useLang();
    breadcrumbs[0].title = __('products.products')
    const saveButton = __('posts.saveButton')
    
   const submit: FormEventHandler = (e) => {
        e.preventDefault()

        router.post(route('products.update', currentProduct.id), {
            _method: 'put',
            name,
            description, 
            price,
            quantityInStock
        })

    }
    

	
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Update" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
		<div className="flex justify-end">
			<Link href={`/products?lang=${__('products.lang')}`} className="text-indigo-500 underline">{__('posts.back')}</Link>
		</div>

        <div className="max-w-md mx-auto my-4 p-6 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">{__('products.name')}</Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            autoFocus
                            placeholder="Enter the product name"
                            value={name}
                            onChange={(e) => setName(e.target.value) }
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">{__('products.description')}</Label>
                        <Textarea
                            id="description"
                            name="description"
                            autoFocus
                            placeholder="Enter the product description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value) }
                        />
                        <InputError message={errors.description} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="price">{__('products.price')}</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            autoFocus
                            placeholder="0"
                            value={price}
                            onChange={(e) => setPrice(e.target.value) }
                        />
                        <InputError message={errors.price} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="quantityInStock">{__('products.quantityInStock')}</Label>
                        <Input
                            id="quantityInStock"
                            name="quantityInStock"
                            type="number"
                            autoFocus
                            placeholder="0"
                            value={quantityInStock}
                            onChange={(e) => setQuantityInStock(e.target.value) }
                        />
                        <InputError message={errors.quantityInStock} />
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 w-full"
                        tabIndex={4}
                    >
                        {saveButton}
                    </Button>
                </div>
                
            </form>
        </div>
            </div>
        </AppLayout>
    );
}
