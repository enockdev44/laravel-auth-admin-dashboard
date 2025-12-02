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
        title: 'Update post',
        href: '/posts',
    },
];

export default function PostEdit({ currentPost }: { currentPost: Post }) {
    const [ title, setTitle ] = useState<string>(currentPost.title);
    const [ content, setContent ] = useState<string>(currentPost.content);
    const [ image, setImage ] = useState<File | null>(currentPost.image);
    const [ imagePreview, setImagePreview ] = useState<string | null>(null);
    const { errors } = usePage().props;
    const { __ } = useLang();
    breadcrumbs[0].title = "Post Update"
    const saveButton = __('posts.saveButton')
    
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = await e.target.files?.[0];
        if(file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

   const submit: FormEventHandler = (e) => {
        e.preventDefault()

        router.post(route('posts.update', currentPost.id), {
            _method: 'put',
            title,
            content, 
            image,
        })

    }
    

	
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post Update" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
		<div className="flex justify-end">
			<Link href={`/posts?lang=${__('posts.lang')}`} className="text-indigo-500 underline">{__('posts.back')}</Link>
		</div>

        <div className="max-w-md mx-auto my-4 p-6 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">{__('posts.title')}</Label>
                        <Input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value) }
                        />
                        <InputError message={errors.title} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="image">{__('posts.image')}</Label>
                        <Input
                            id="image"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <div className='flex gap-2'>
                            <img className={"w-10 h-10 border border-red-500 rounded-full object-cover" + (imagePreview ? " opacity-30":"")} alt={currentPost.title} src={currentPost.image} />
                            {imagePreview && <img className="w-10 h-10 border border-green-500 rounded-full object-cover" alt={currentPost.title} src={imagePreview} />}
                        </div>
                        <InputError message={errors.image} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="content">{__('posts.content')}</Label>
                        <Textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value) }
                        />
                        <InputError message={errors.content} />
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
