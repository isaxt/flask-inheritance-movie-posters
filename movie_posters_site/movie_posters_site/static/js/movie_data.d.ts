export interface movieDiscoverData {
    page: number;
    total_pages: number;
    total_results: number;
    results: movieDiscoverResults[];
}
export interface movieDiscoverResults {
    title: string;
    original_title: string;
    genre_ids: number[];
    id: number;
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    original_language: string;
    overview: string;
    popularity: number;
    release_date: string;
    softcore: boolean;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
//# sourceMappingURL=movie_data.d.ts.map