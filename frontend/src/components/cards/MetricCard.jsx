import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function MetricCard({ title, value, loading }) {
  if (loading) {
    return (
      <Card>
        <CardContent className="p-5 flex flex-col justify-center items-center text-center">
          <Skeleton className="h-3 w-16 mb-2" />
          <Skeleton className="h-7 w-20" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-200 hover:shadow-md hover:bg-zinc-50">
      <CardContent className="p-5 flex flex-col justify-center items-center text-center h-full">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{title}</span>
        <span className="text-2xl font-bold text-zinc-900">{value}</span>
      </CardContent>
    </Card>
  );
}
