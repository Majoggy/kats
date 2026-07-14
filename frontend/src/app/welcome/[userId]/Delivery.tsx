'use client';

import { useQuery } from '@tanstack/react-query';
import { WelcomeCard } from '@/components/WelcomeCard';
import { getNextDelivery } from '@/lib/get-next-delivery';
import { ErrorState } from '@/components/ErrorState';
import { LoadingState } from '@/components/LoadingState';

export function Delivery({ userId }: { userId: string }) {
  const {
    data: delivery,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['next-delivery', userId],
    queryFn: () => getNextDelivery(userId),
  });

  if (isPending) {
    return <LoadingState />;
  }

  if (isError || !delivery) {
    return <ErrorState />;
  }

  return <WelcomeCard {...delivery} />;
}
