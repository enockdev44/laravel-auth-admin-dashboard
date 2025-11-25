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
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create post',
        href: '/posts/create',
    },
];

type PostForm = {
    title: string;
    content: string;
    image: File | null;
};

export default function PostCreate() {
    const { __ } = useLang();
    breadcrumbs[0].title = __('posts.create')
    const title = __('posts.title')
    const content = __('posts.content')
    const image = __('posts.image')
    
    const placeholderTitle = __('posts.placeholderTitle')
    const placeholderContent = __('posts.placeholderContent')
    const placeholderImage = __('posts.placeholderImage')
    
    const saveButton = __('posts.saveButton')
    
    const { data, setData, post, get, processing, errors, reset } = useForm<PostForm>({
        title: '',
        content: '',
        image: null
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            setData('image', file);
        }
    }

   const submit: FormEventHandler = (e) => {
        e.preventDefault()
        console.log('Submitting data:', data)
        
        // Create FormData to handle file upload properly
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        if (data.image) {
            formData.append('image', data.image);
        }
        
        post(route('posts.store'), {
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
            <Head title={__('posts.create')} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
		<div className="flex justify-end">
			<Link href={`/posts?lang=${__('posts.lang')}`} className="text-indigo-500 underline">{__('posts.back')}</Link>
		</div>

        <div className="max-w-md mx-auto my-4 p-6 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">{title}</Label>
                        <Input
                            id="title"
                            type="text"
                            name="title"
                            autoFocus
                            placeholder={placeholderTitle}
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value) }
                        />
                        <InputError message={errors.title} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="title">{image}</Label>
                        <Input
                            id="image"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <InputError message={errors.image} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="content">{content}</Label>
                        <Textarea
                            id="content"
                            name="content"
                            autoFocus
                            placeholder={placeholderContent}
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value) }
                        />
                        <InputError message={errors.content} />
                    </div>
                    <Button
                        type="submit"
                        className="mt-4 w-full"
                        tabIndex={4}
                        disabled={processing}
                        data-test="post-create-button"
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
