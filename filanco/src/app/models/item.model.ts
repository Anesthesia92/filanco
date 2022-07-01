export interface Comments {
  comments: Comment[];
  text: string;
}

export interface Comment {
  id: number;
  text: string;
}

export interface Domain {
  id: number;
  text: string;
  link: string
}
