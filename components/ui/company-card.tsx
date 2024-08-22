import * as React from "react";

interface CompanyCardProps {
  name: string;
  icon: React.ReactElement;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  icon,
}: CompanyCardProps): React.ReactElement => {
  return (
    <div className="px-2">
      <div className="flex items-center w-full space-x-3 px-4 py-2">
        <div className="size-10">{icon}</div>
        <div className="whitespace-nowrap capitalize text-3xl">{name}</div>
      </div>
    </div>
  );
};
