interface ProjectTagProps {
  tag: string;
  color: string;
}

export default function ProjectTag({ tag, color }: ProjectTagProps) {
  return (
    <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white font-medium`}>
      {tag}
    </span>
  );
}