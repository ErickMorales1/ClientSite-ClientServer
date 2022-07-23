export interface Posts {
  data: PostsData[];
  meta: number;
}

export interface PostsData {
  tittle: string;
  description: string;
  date: string;
  user: string;
  section: string;
  comment: string;
  id: number;
  day: number;
  month: string;
}



