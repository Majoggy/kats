import { Wrapper } from "@/components/WelcomeCard/styled";
import { Delivery } from "./Delivery";

export default async function WelcomePage(
  props: PageProps<"/welcome/[userId]">,
) {
  const { userId } = await props.params;

  return (
    <Wrapper>
      <Delivery userId={userId} />
    </Wrapper>
  );
}
