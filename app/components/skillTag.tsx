interface SkillTagProps {
  title: string;
}

export default function SkillTag({ title }: SkillTagProps) {
  return (
    <strong className="block px-3 py-1 border border-violet-blue rounded font-semibold text-violet-blue hover:scale-105 animate-pulse">
      {title}
    </strong>
  );
}
