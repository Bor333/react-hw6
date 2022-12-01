export interface Article {
    id: string;
    title: string;
}

export interface ArticlesState {
    articles: Article[],
    loading: boolean,
    error: string
}