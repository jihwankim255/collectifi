export interface StyledDivProps {
  bgImage: string;
  // 다른 props 추가 가능
}
export interface CardProps {
  token_id: number;
  user_id: number;
  player: string;
  season: string;
  team: string;
  card_color: number;
  price: number;
  selling_price: number;
  img_url: string;
  isSell: boolean;
}
