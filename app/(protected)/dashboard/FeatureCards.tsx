import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  progress: number;
}

export default function DashboardCard({
  title,
  description,
  icon: Icon,
  color,
  progress,
}: DashboardCardProps) {
  return (
    <div className="w-full glass-card rounded-2xl p-6 hover-scale">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-15`}>
          <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full border-4 border-gray-100 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-700">{progress}%</span>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${color} animate-pulse-slow rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
