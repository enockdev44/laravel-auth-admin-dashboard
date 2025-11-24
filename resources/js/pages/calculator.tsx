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
  ItemTitle,
} from "@/components/ui/item";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useLang } from '@/hooks/useLang';
import AppLogo from '../components/app-logo';
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import HeadingSmall from "@/components/heading-small";

export default function Calculator({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

	const { __ } = useLang();
	
	var fenetre = ""
    
    const val = function (v) {
        fenetre = fenetre + v
        document.getElementById('fenetre').value = fenetre
        console.log(fenetre)
    }
    
    const calculate = function () {
        let err = ''
        if(fenetre=='' || fenetre=='+' || fenetre=='-' || fenetre=='*' || fenetre=='/' || fenetre=='.') {
            err = 'Sorry, Input number required'
            console.log(err)
            document.getElementsByClassName('infos')[0].textContent = err
            return
        }
        const result = eval(fenetre)
        document.getElementsByClassName('infos')[0].textContent = ""
        document.getElementById('fenetre').value = result
        console.log(result)
    }
    
    const suppr = function () {
        fenetre = ""
        document.getElementById('fenetre').value = "0"
        document.getElementsByClassName('infos')[0].textContent = ""
        console.log('full reset')
    }

    const back = function () {
        let tab = fenetre.split('')
        tab.pop()
        fenetre = tab.join('')
        document.getElementsByClassName('infos')[0].textContent = ""
        document.getElementById('fenetre').value = fenetre
    }
    
    return (
        <>
            <Head title='Calculator'>
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
                                        <img width={20} height={20} src={`https://media.flaticon.com/dist/min/img/flags/${__('welcome.langButtonSwitcher')}.svg`} alt={__('welcome.langTextSwitcher')} />
                                    </div>
                                    <div className="text-[#1b1b18] dark:text-[#EDEDEC]">{__('welcome.langTextSwitcher')}</div>
                                </Link>
                            </>
                        </div>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex-col items-center rounded-xl border-[#0a0a0a] lg:justify-center dark:border-[#646464] w-full flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex w-full flex-col gap-4">
                            <div className="calculatrice">
                                <p className="infos"></p>
                                <form name="form">
                                    <div className="resultat">
                                        <input type="text" id="fenetre" value={fenetre} name="fenetre" />
                                    </div>
                                    <div className="buttons">
                                        <div className="row">
                                            <input type="button" value="7" name="v7" onClick={() => val(7)} />
                                            <input type="button" value="8" name="v8" onClick={() => val(8)} />
                                            <input type="button" value="9" name="v9" onClick={() => val(9)} />
                                            <input type="button" value="+" name="plus" onClick={() => val("+")} />
                                        </div>
                                        <div className="row">
                                            <input type="button" value="4" name="v4" onClick={() => val(4)} />
                                            <input type="button" value="5" name="v5" onClick={() => val(5)} />
                                            <input type="button" value="6" name="v6" onClick={() => val(6)} />
                                            <input type="button" value="-" name="minus" onClick={() => val("-")} />
                                        </div>
                                        <div className="row">
                                            <input type="button" value="1" name="v1" onClick={() => val(1)} />
                                            <input type="button" value="2" name="v2" onClick={() => val(2)} />
                                            <input type="button" value="3" name="v3" onClick={() => val(3)} />
                                            <input type="button" value="*" name="multiply" onClick={() => val('*')} />
                                        </div>
                                        <div className="row">
                                            <input type="button" value="0" name="v0" onClick={() => val(0)} />
                                            <input type="button" value="." name="dot" onClick={() => val('.')} />
                                            <input type="button" value="/" name="divide" onClick={() => val('/')} />
                                            <input type="button" value="=" name="egale" onClick={() => calculate()} />
                                        </div>
                                        <div className="row">
                                            <input type="button" className="reset" value="<-" name="back" onClick={() => back()} />
                                            <input type="button" className="reset" value="AC" name="reset" onClick={() => suppr()} />
                                            <input type="button" value="00" name="v00" onClick={() => val('00')} />
                                            <input type="button" value="000" name="v000" onClick={() => val('000')} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>

            </div>
        </>
    );
}
