import { Wrapper } from "@/components/NextDeliveryCard/styled";
import { NextDelivery } from "./NextDelivery";

export default async function WelcomePage(
  props: PageProps<"/welcome/[userId]">,
) {
  const { userId } = await props.params;

  return (
    <Wrapper>
      <NextDelivery userId={userId} />
    </Wrapper>
  );
}
