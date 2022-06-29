export interface Comments {
  comments: Comment[];
  text: string;
}

export interface Domains {
  comments: Domain[];
}

export interface Comment {
  id: number;
  text: string;
}

export interface Domain {
  id: number;
  text: string;
}
