import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { useForm, Head, Link } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from '@/components/ui/spinner';
import { useLang } from '@/hooks/useLang';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create product',
        href: '/products/create',
    },
];

type ProductForm = {
    name: string;
    description: string;
    price: string;
    quantityInStock: string;
};

export default function ProductCreate() {
    const { __ } = useLang();
    breadcrumbs[0].title = __('products.create')
	breadcrumbs[0].href = "/" + __('products.lang') + "/products";
    const saveButton = __('posts.saveButton')
    
    const { data, setData, post, get, processing, errors, reset } = useForm<ProductForm>({
        name: '',
        description: '',
        price: '',
        quantityInStock: ''
    });

   const submit: FormEventHandler = (e) => {
        e.preventDefault()
        console.log('Submitting data:', data)
        
        // Create FormData to handle file upload properly
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('quantityInStock', data.quantityInStock);
        
        post(route('products.store'), {
            data: formData,
            forceFormData: true, // Ensure FormData is used
            onSuccess: () => {
                reset();
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
            onError: (errors) => {
                console.log('Form errors:', errors);
            }
        })
    }
    

	
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={__('products.create')} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
		<div className="flex justify-end">
			<Link href={`/products?lang=${__('products.lang')}`} className="text-indigo-500 underline">{__('products.back')}</Link>
		</div>

        <div className="max-w-md mx-auto my-4 p-6 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">{__('products.nameProduct')}</Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            autoFocus
                            placeholder="Enter the product name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value) }
                        />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">{__('products.descriptionProduct')}</Label>
                        <Textarea
                            id="description"
                            name="description"
                            autoFocus
                            placeholder="Enter the product description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value) }
                        />
                        <InputError message={errors.description} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="price">{__('products.priceProduct')}</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            autoFocus
                            placeholder="0"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value) }
                        />
                        <InputError message={errors.price} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="quantityInStock">{__('products.quantityInStockProduct')}</Label>
                        <Input
                            id="quantityInStock"
                            name="quantityInStock"
                            type="number"
                            autoFocus
                            placeholder="0"
                            value={data.quantityInStock}
                            onChange={(e) => setData('quantityInStock', e.target.value) }
                        />
                        <InputError message={errors.quantityInStock} />
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 w-full"
                        tabIndex={4}
                        disabled={processing}
                        data-test="product-create-button"
                    >
                        {processing && <Spinner />}
                        {saveButton}
                    </Button>
                </div>
                
            </form>
        </div>
            </div>
        </AppLayout>
    );
}
