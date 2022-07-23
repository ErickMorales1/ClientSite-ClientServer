export interface Comments {
    data: CommentsData[];
    meta: number;
}

export interface CommentsData {
    id:      number;
    comment: string;
    user:    string;
    idpost:  number;
}