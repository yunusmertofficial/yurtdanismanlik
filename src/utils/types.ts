export interface ImageProps {
  id: number;
  height?: string;
  width?: string;
  public_id: string;
  format: string;
  alt?: string;
}
export interface Image {
  src: string;
  blurDataURL?: string;
  alt?: string;
}
