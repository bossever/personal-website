import Typography from "./Typography";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative min-h-[100svh] flex flex-col border-t border-[#202020]
        border-opacity-15 dark:border-white dark:border-opacity-15 px-10 py-16 gap-6
        tablet:gap-8 laptop:gap-10 tablet:px-24 tablet:py-20 laptop:px-32 laptop:py-24
      `}
    >
      <Typography level="heading">{title}</Typography>
      <main className="flex-grow pt-4">{children}</main>
    </section>
  );
}
