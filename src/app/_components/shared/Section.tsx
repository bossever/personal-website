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
      className="relative min-h-[800px] max-h-[1200px] h-lvh flex flex-col border-t dark:border-t-[#00000020] px-14 py-16 gap-6 tablet:gap-8 laptop:gap-10 tablet:px-24 tablet:py-20 laptop:px-32 laptop:py-24"
    >
      <Typography level="heading">{title}</Typography>
      <main className="flex-grow">{children}</main>
    </section>
  );
}
