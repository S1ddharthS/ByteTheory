import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function StatCard({ title, value, icon: Icon, loading }) {
  if (loading) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <Skeleton className="h-8 w-16 mt-4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:border-indigo-100 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between text-zinc-500 mb-4">
          <span className="text-sm font-medium tracking-tight text-zinc-600 group-hover:text-indigo-600 transition-colors">{title}</span>
          {Icon && <Icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-500 transition-colors" />}
        </div>
        <div className="text-3xl font-bold text-zinc-900 tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
}
