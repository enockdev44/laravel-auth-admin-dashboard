export default function Paragraph({
    content,
}: {
    content: string;
}) {
    return (
        <p className="text-[#0a0a0a] dark:text-[#646464] lg:text-lg md:text-md sm:text-sm mb-4">
            {content}
        </p>
    );
}
