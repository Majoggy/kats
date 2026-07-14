export type NextDeliveryResponse = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
};

export async function getNextDelivery(
  userId: string,
): Promise<NextDeliveryResponse | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comms/your-next-delivery/${encodeURIComponent(userId)}`,
    { cache: "no-store" },
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to load delivery details (${res.status})`);
  }

  return res.json() as Promise<NextDeliveryResponse>;
}
