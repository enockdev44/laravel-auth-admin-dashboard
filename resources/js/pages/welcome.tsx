import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';
import AppLogo from '../components/app-logo';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
	const { __ } = useLang();
    return (
        <>
            <Head title={__('welcome.welcome')}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-between">
			<div>
                            <Link className="flex items-center gap-2 text-[#1b1b18] dark:text-[#EDEDEC]" href={`/?lang=${__('dashboard.lang')}`} prefetch>
                                <AppLogo />
                            </Link>
			</div>
			<div className="flex items-center gap-4">
                        {auth.user ? (
			<>
                            <Link
                                href={"/dashboard/?lang=" + __('welcome.lang')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                {__('dashboard.dashboard')}
                            </Link>
			</> 
                       ) : (
                            <>
                                <Link
                                    href={`/login?lang=${__('welcome.lang')}`}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    {__('welcome.login')}
                                </Link>
                                {canRegister && (
                                    <Link
					href={`/register?lang=${__('welcome.lang')}`}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                    {__('welcome.register')}

                                    </Link>
                                )}
                            </>
                        )}
			<>
                        <Link
                        href={"/?lang=" + __('welcome.langButtonSwitcher')}
                        className="flex items-center gap-2 rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover">
                            <div>
                                <img width={20} height={20} src={ `https://media.flaticon.com/dist/min/img/flags/${__('welcome.langButtonSwitcher')}.svg` } alt={__('welcome.langTextSwitcher')} />
                            </div>
                            <div className="text-[#1b1b18] dark:text-[#EDEDEC]">{__('welcome.langTextSwitcher')}</div>
                        </Link>
			</>
			</div>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <
main className="flex-col items-center rounded-xl border-[#0a0a0a] text-[#646464] dark:text-[#0a0a0a] lg:justify-center dark:border-[#646464] w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
    <div className="flex w-full flex-col gap-4">
      <Item variant="outline" className="px-[40px] pt-[40px] pb-[80px]">
        <ItemContent className="flex items-start justify-start">
          <ItemTitle className="text-5xl pb-3">{__('welcome.hello')}</ItemTitle>
          <ItemActions className="flex-col items-start">
		  <p className="text-4xl pb-3">{__('welcome.whoami')}</p>
                  <p className="text-lg pb-3">{__('welcome.myjobis')}</p>
              <div className="flex gap-3">
		  <Button variant="outline" size="sm">{__('welcome.buttonProjects')}</Button> 
                  <Button variant="outline" size="sm">{__('welcome.buttonCV')}</Button> 
                  <Button variant="outline" size="sm">{__('welcome.buttonContact')}</Button> 
	      </div>
	 </ItemActions>
        </ItemContent>
        <ItemDescription>
                <div className="w-full">
                                        <Avatar className="size-auto">
                                                <AvatarImage src="/profile.jpg" />
                                                <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                  </div>
        </ItemDescription>
      </Item>
    </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
