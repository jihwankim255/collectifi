export interface Info {
  img_url?: string;

  raisedAmount?: number;

  raisedEth?: number;

  targetAmount?: number;

  targetEth?: number;

  title?: string;

  percent?: number;
}

export interface BarSegmentProps {
  width?: number;
  color: string;
}
