import { ShieldCheck, Award, CreditCard, Headphones } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Authentic Products",
      description: "100% genuine items",
    },
    {
      icon: Award,
      title: "Quality Checked",
      description: "Verified quality",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Safe transactions",
    },
    {
      icon: Headphones,
      title: "Fast Support",
      description: "24/7 assistance",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="trust-badge">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
