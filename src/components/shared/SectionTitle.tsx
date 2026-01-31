interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-8 ${alignClass[align]} ${className}`}>
      {subtitle && (
        <p className="section-subtitle mb-2">{subtitle}</p>
      )}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
