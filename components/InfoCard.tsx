import { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="soft-card p-6">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}