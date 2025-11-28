import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import FirstCustomCard from '@/components/first-custom-card';

import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/en/dashboard',
    },
];

export default function Dashboard({ chartData }) {
	const { __ } = useLang();
	breadcrumbs[0].title = __('dashboard.dashboard');
	breadcrumbs[0].href = "/" + __('dashboard.lang') + "/dashboard";
    /* charts configurations */
   const chartRef = useRef(null)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dollar Values Over Time'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label;
                        if(label) {
                            label += ': ';
                        }
                        if(context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'}).format(value);
                    }
                },
                beginAtZero: true,
            },
        },
    }
    
    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor,
            backgroundColor: dataset.backgroundColor,
            tension: 0.1,
        })),
    }
    
    /* end charts configurations */
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={__('dashboard.dashboard')} />
            <div className="flex h-full flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" countable="17" title="Total orders" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" countable="53" title="Total products" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" countable="74" title="Total customers" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" money="57" title="Total sales" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" money="41" title="Total sales this month" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" money="5" title="Total sales last month" />
                        <FirstCustomCard className="relative max-h-[120px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0" money="11" title="Total sales last 3 days" />
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="relative max-h-[480px] overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-0">
                         <Line ref={chartRef} options={options} data={data}/>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
