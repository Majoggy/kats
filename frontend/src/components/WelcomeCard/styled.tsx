import styled from "styled-components";
import { colors, TABLET_BREAKPOINT } from "@/styles/theme";

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${colors.pageBackground};
  padding: 1.5rem;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${colors.border};
  background: ${colors.surface};

  @media (min-width: ${TABLET_BREAKPOINT}) {
    flex-direction: row;
  }
`;

export const DesktopImage = styled.img`
  display: none;
  width: 40%;
  max-height: 250px;
  object-fit: cover;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    display: block;
  }
`;

export const MobileImage = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  height: 3rem;
  width: 3rem;
  transform: translate(-50%, -60%);
  border-radius: 50%;
  border: 0.0625rem solid ${colors.border};
  object-fit: cover;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 1.5rem 2rem;
  text-align: center;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    text-align: left;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
`;

export const Message = styled.p`
  color: ${colors.textMuted};
  margin-right: 3rem;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-right: 0;
  }
`;

export const Price = styled.p`
  font-weight: 600;
  color: ${colors.text};
`;

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${TABLET_BREAKPOINT}) {
    justify-content: flex-start;
  }
`;

export const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  flex: 1;
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  background: ${(p) =>
    p.$variant === "primary" ? colors.primary : colors.surface};
  color: ${(p) =>
    p.$variant === "primary" ? colors.surface : colors.primary};
  border-color: ${(p) =>
    p.$variant === "primary" ? "transparent" : colors.primary};

  &:hover {
    background: ${(p) =>
      p.$variant === "primary" ? colors.primaryDark : colors.primaryLight};
  }

  @media (min-width: ${TABLET_BREAKPOINT}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const FreeGiftBadge = styled.span`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(-50%) rotate(-6deg);
  background: ${colors.accentBackground};
  border: 0.0078125rem solid ${colors.accentText};
  padding: 0.25rem 0.75rem;
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${colors.accentText};

  @media (min-width: ${TABLET_BREAKPOINT}) {
    left: auto;
    top: 0;
    right: 0;
    transform: translateX(30%) translateY(-50%) rotate(6deg);
  }
`;
