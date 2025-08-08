
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  headline: string;
  keywords: string[];
  content: React.ReactNode;
}

export interface ThumbnailImage {
  quality: string;
  url: string;
  resolution: string;
}
