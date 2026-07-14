"use client";

import {
  Actions,
  Button,
  Card,
  CardWrapper,
  Content,
  DesktopImage,
  FreeGiftBadge,
  Message,
  MobileImage,
  Price,
  Title,
} from "./styled";

type Props = {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
};

const CAT_IMAGE_URL = "https://cataas.com/cat";

export function WelcomeCard({
  title,
  message,
  totalPrice,
  freeGift,
}: Props) {
  
  const TOTAL_PRICE = `£${totalPrice.toFixed(2)}`;

  return (
    <CardWrapper>
      <MobileImage src={CAT_IMAGE_URL} alt="A cat" />
      <Card>
        <DesktopImage src={CAT_IMAGE_URL} alt="A cat" />
        <Content>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <Price>Total price: {TOTAL_PRICE}</Price>
          <Actions>
            <Button $variant="primary">
              See details
            </Button>
            <Button $variant="secondary">
              Edit delivery
            </Button>
          </Actions>
        </Content>
      </Card>
      {freeGift && <FreeGiftBadge>Free gift</FreeGiftBadge>}
    </CardWrapper>
  );
}
