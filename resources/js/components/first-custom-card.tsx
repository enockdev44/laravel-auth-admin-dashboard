import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Paragraph from '@/components/paragraph';

export default function FirstCustomCard({
    money,
    countable,
    title,
    className,
}: {
    money?: string;
    countable?: number;
    title: string;
    className: string;
}) {
    return (
        <div className={className}>
            <Card className="border p-0 m-0">
                <CardContent className="text-start py-auto px-4 my-0">
                    {money && (<h1 className="text-[50px]">$ {money}</h1>)}
                    {countable && (<h1 className="text-[50px]">{countable}</h1>)}
                    <Paragraph content={title} />
                </CardContent>
            </Card>
        </div>
    );
}
