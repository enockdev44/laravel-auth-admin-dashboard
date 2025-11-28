import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Post',
    href: '/posts',
  },
];

export default function Chart({ chartData }) {
  const { __ } = useLang();
  breadcrumbs[0].title = __('posts.posts')
  breadcrumbs[0].href = "/" + __('posts.lang') + "/posts"
  const title = __('posts.title')
  const content = __('posts.content')
  const image = __('posts.image')

    const chartRef = useRef(null)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'My Chart'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }
    
    const data = {
        labels: chartData.labels,
        datasets: [
            {
                label: chartData.datasetLabel,
                data: chartData.data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }
    
    return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={__('posts.posts')} />
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="flex justify-end">
          <Link href={`/posts/create?lang=${__('posts.lang')}`} className="text-indigo-500 underline">{__('posts.create')}</Link>
        </div>

        <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
         <Bar ref={chartRef} options={options} data={data}/>   

        </div>
      </div>
    </AppLayout>
    );
}
