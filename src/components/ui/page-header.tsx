
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <CyberpunkHeading 
        size="xl" 
        variant="gradient" 
        withLinesDecoration
        className="mb-2"
      >
        {title}
      </CyberpunkHeading>
      {subtitle && (
        <p className="text-white/70 text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
