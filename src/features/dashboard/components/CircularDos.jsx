import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState,useEffect } from 'react';

const CircularDos = ({ percentage, size = 300}) => {
  let data = [
    { name: "Filled", value: percentage },
    { name: "Remaining", value: 100-percentage },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"];
  useEffect(() => {
  }, [percentage]);


  return (
    <div className="mt-8 mx-auto relative flex items-center justify-center" style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.35}
            outerRadius={size * 0.5}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute text-5xl font-bold">{percentage}%</div>
    </div>
  );
};

export default CircularDos;
