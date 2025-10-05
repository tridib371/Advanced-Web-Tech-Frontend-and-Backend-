export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {/* Layout UI specific to "about" */}
            <main>{children}</main>
        </div>
    );
}
