"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MetricData {
  value: number;
  change: number;
  trend: number[];
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState({
    accuracy: { value: 85.4, change: 2.3, trend: [82, 83, 84, 85, 85.4] },
    aum: { value: 52.3, change: 5.7, trend: [45, 47, 49, 51, 52.3] },
    trades: { value: 1247, change: 12, trend: [1100, 1150, 1200, 1230, 1247] },
    uptime: { value: 99.97, change: 0.02, trend: [99.92, 99.94, 99.95, 99.96, 99.97] }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        accuracy: updateMetric(prev.accuracy, 0.1),
        aum: updateMetric(prev.aum, 0.5),
        trades: updateMetric(prev.trades, 5),
        uptime: updateMetric(prev.uptime, 0.01)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updateMetric = (metric: MetricData, variance: number): MetricData => {
    const change = (Math.random() - 0.5) * variance;
    const newValue = parseFloat((metric.value + change).toFixed(2));
    const newTrend = [...metric.trend.slice(1), newValue];
    return { value: newValue, change: parseFloat(change.toFixed(2)), trend: newTrend };
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="AI Accuracy"
        value={`${metrics.accuracy.value}%`}
        change={metrics.accuracy.change}
        trend={metrics.accuracy.trend}
        icon="🎯"
        color="cyan"
      />
      <MetricCard
        title="Assets (M)"
        value={`$${metrics.aum.value}M`}
        change={metrics.aum.change}
        trend={metrics.aum.trend}
        icon="💰"
        color="blue"
      />
      <MetricCard
        title="Trades Today"
        value={metrics.trades.value.toString()}
        change={metrics.trades.change}
        trend={metrics.trades.trend}
        icon="⚡"
        color="purple"
      />
      <MetricCard
        title="System Uptime"
        value={`${metrics.uptime.value}%`}
        change={metrics.uptime.change}
        trend={metrics.uptime.trend}
        icon="🔒"
        color="green"
      />
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: number[];
  icon: string;
  color: "cyan" | "blue" | "purple" | "green";
}

function MetricCard({ title, value, change, trend, icon, color }: MetricCardProps) {
  const isPositive = change >= 0;
  const colorClasses = {
    cyan: "from-cyan-500/20 to-transparent border-cyan-500/30",
    blue: "from-blue-500/20 to-transparent border-blue-500/30",
    purple: "from-purple-500/20 to-transparent border-purple-500/30",
    green: "from-green-500/20 to-transparent border-green-500/30"
  };

  const maxValue = Math.max(...trend);
  const minValue = Math.min(...trend);
  const range = maxValue - minValue || 1;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`bg-gradient-to-br ${colorClasses[color]} hover:border-${color}-500/50 transition-all`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-slate-400">{title}</CardTitle>
            <span className="text-2xl">{icon}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between mb-4">
            <motion.div
              key={value}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold text-white"
            >
              {value}
            </motion.div>
            <div className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(change)}
            </div>
          </div>

          {/* Mini Sparkline */}
          <div className="flex items-end gap-1 h-12">
            {trend.map((val, i) => {
              const height = ((val - minValue) / range) * 100;
              return (
                <motion.div
                  key={i}
                  className={`flex-1 bg-gradient-to-t from-${color}-500 to-${color}-400 rounded-sm`}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(height, 10)}%` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
