import type { NextDeliveryResponse } from "@/lib/get-next-delivery";
import { WelcomeCard } from "@/components/WelcomeCard";

// TODO: hardcoded until the /comms/your-next-delivery/<userId> endpoint exists.
const MOCK_DELIVERY: NextDeliveryResponse = {
  title: "Your next delivery for Dorian and Ocie",
  message:
    "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
  totalPrice: 134.0,
  freeGift: true,
};

export default async function WelcomePage(props: PageProps<"/welcome/[userId]">) {
  await props.params;

  return <WelcomeCard {...MOCK_DELIVERY} />;
}
