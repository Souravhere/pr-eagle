import { cn } from "@/lib/utils";
import {
  IconTrendingUp,
  IconUsers,
  IconLink,
  IconHeart,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Growing Eagles",
      description:
        "$EAGLES builds a strong foundation within the growing Solana ecosystem, expanding its potential as Solana thrives.",
      icon: <IconTrendingUp size={32} />,
    },
    {
      title: "Strong Partnerships",
      description:
        "EAGLES has partnered with blockchain leaders to drive long-term success and sustainable growth, providing key resources as we expand our impact.",
      icon: <IconUsers size={32} />,
    },
    {
      title: "Powerful Integrations",
      description:
        "EAGLES integrates with top exchanges, wallets, and services, ensuring seamless access and utility across platforms.",
      icon: <IconLink size={32} />,
    },
    {
      title: "Community Support",
      description:
        "EAGLES thrives on strong community and platform support, driving its adoption and utility across crypto.",
      icon: <IconHeart size={32} />,
    },
  ];

  return (
        <>
        <h1 className="text-4xl sm:text-5xl text-white text-center sm:mt-10 my-4">Eagles Utilities</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
        </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r font-sans py-10 relative group/feature dark:border-neutral-800 bg-black text-white",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-500 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-500 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-orange-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
