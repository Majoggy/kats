import { GenericCard } from '@/components/GenericCard';
import { Title } from './Title';

export function ErrorState() {
  return (
    <GenericCard>
      <Title>Oh no, we can't find your cats right now.</Title>
    </GenericCard>
  );
}
