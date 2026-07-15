import { GenericCard } from '@/components/GenericCard';
import { Title } from './Title';

export function LoadingState() {
  // Ideally I'd want a skeleton loader instead of this flashing up
  return (
    <GenericCard>
      <Title>Loading...</Title>
    </GenericCard>
  );
}
