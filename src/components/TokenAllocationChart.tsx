"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AllocationDataItem {
  name: string;
  value: number;
  color: string;
  gradient: string;
  description: string;
  tokens: string;
  [key: string]: string | number;
}

const allocationData: AllocationDataItem[] = [
  { name: "Private Sale", value: 20, color: "#06b6d4", gradient: "from-cyan-500 to-blue-500", description: "Early investor allocation with 12-month vesting", tokens: "200M VEL" },
  { name: "Team & Advisors", value: 15, color: "#8b5cf6", gradient: "from-purple-500 to-pink-500", description: "Core team with 24-month vesting and 6-month cliff", tokens: "150M VEL" },
  { name: "Liquidity Pool", value: 15, color: "#3b82f6", gradient: "from-blue-500 to-cyan-500", description: "DEX liquidity provision for trading", tokens: "150M VEL" },
  { name: "Ecosystem Development", value: 25, color: "#10b981", gradient: "from-green-500 to-emerald-500", description: "Platform growth and partnerships", tokens: "250M VEL" },
  { name: "Community Rewards", value: 20, color: "#f59e0b", gradient: "from-amber-500 to-orange-500", description: "Staking rewards and governance incentives", tokens: "200M VEL" },
  { name: "Reserve Fund", value: 5, color: "#ef4444", gradient: "from-red-500 to-rose-500", description: "Emergency fund and market stabilization", tokens: "50M VEL" },
];

interface TooltipPayload {
  name: string;
  value: number;
  payload: AllocationDataItem;
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-sm border border-purple-500/50 rounded-xl p-4 shadow-2xl">
        <p className="text-white font-bold mb-2 text-lg">{payload[0].name}</p>
        <p className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold mb-2">{payload[0].value}%</p>
        <p className="text-slate-400 text-sm">{payload[0].payload.tokens}</p>
      </div>
    );
  }
  return null;
};

export function TokenAllocationChart() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="relative">
      <Card className="bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-cyan-900/20 border-purple-700/30 border-2 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 animate-pulse"></div>

        <CardHeader className="relative z-10">
          <div className="text-center mb-2">
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs mb-4">
              Token Distribution
            </Badge>
          </div>
          <CardTitle className="text-white text-3xl md:text-4xl text-center font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-green-300 bg-clip-text text-transparent">
            1 Billion VEL Tokens
          </CardTitle>
          <p className="text-slate-400 text-center mt-3 text-lg">
            Strategically allocated for sustainable growth and value creation
          </p>
        </CardHeader>

        <CardContent className="relative z-10 pb-8 md:pb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Pie Chart */}
            <div className="relative">
              <ResponsiveContainer width="100%" height={400} className="md:!h-[500px]">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius="25%"
                    outerRadius="45%"
                    paddingAngle={4}
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1200}
                  >
                    {allocationData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={activeIndex === index ? "#fff" : "rgba(255,255,255,0.15)"}
                        strokeWidth={activeIndex === index ? 4 : 2}
                        opacity={activeIndex === index ? 1 : 0.5}
                        style={{
                          cursor: "pointer",
                          filter: activeIndex === index ? "drop-shadow(0 0 12px rgba(255,255,255,0.6))" : "none",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              {/* Center info */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-1 md:mb-2 animate-pulse">
                  {allocationData[activeIndex].value}%
                </div>
                <div className="text-slate-300 font-semibold text-xs md:text-sm">{allocationData[activeIndex].tokens}</div>
              </div>
            </div>

            {/* Active Item Details */}
            <div className="space-y-4 md:space-y-6">
              <div className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${allocationData[activeIndex].gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    {allocationData[activeIndex].name}
                  </h3>
                  <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      {allocationData[activeIndex].value}%
                    </span>
                    <span className="text-white/80 text-base md:text-lg">
                      {allocationData[activeIndex].tokens}
                    </span>
                  </div>
                  <p className="text-white/90 leading-relaxed text-base md:text-lg">
                    {allocationData[activeIndex].description}
                  </p>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {allocationData.map((item, index) => (
                  <button
                    key={index}
                    className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-white/10 border border-white/30 scale-105'
                        : 'bg-slate-800/30 border border-transparent hover:bg-slate-800/50 active:bg-slate-800/50'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-white text-xs md:text-sm font-semibold truncate">{item.name}</p>
                      <p className={`text-xs ${activeIndex === index ? 'text-cyan-300' : 'text-slate-400'}`}>{item.value}%</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center text-xs md:text-sm text-slate-500">
                ✨ Tap or hover to explore allocations
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
