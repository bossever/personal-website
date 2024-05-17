import Typography from "./Typography";

type SectionProps = {
  title: string;
  content: React.ReactNode;
};

export default function Section({ title, content }: SectionProps) {
  return (
    <section>
      <Typography level="heading">{title}</Typography>
      <main>{content}</main>
    </section>
  );
}
