interface FetchResponse {
    data: Data;
}
interface Data {
    Page: Page;
}
interface Page {
    pageInfo: PageInfo;
    media: Media[];
}
interface PageInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
}
interface Media {
    id: number;
    title: Title;
    coverImage: CoverImage;
    startDate: StartDate;
    endDate: EndDate;
    bannerImage?: string | null;
    season: string;
    seasonYear: number;
    description: string;
    type: string;
    format: string;
    status: string;
    episodes?: number | null;
    duration?: null;
    chapters?: null;
    volumes?: null;
    genres?: string[] | null;
    isAdult: boolean;
    averageScore?: null;
    popularity: number;
    nextAiringEpisode?: NextAiringEpisode | null;
    mediaListEntry?: null;
    studios: Studios;
}
interface Title {
    userPreferred: string;
}
interface CoverImage {
    extraLarge: string;
    large: string;
    color?: string | null;
}
interface StartDate {
    year: number;
    month?: number | null;
    day?: number | null;
}
interface EndDate {
    year?: number | null;
    month?: number | null;
    day?: number | null;
}
interface NextAiringEpisode {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
}
interface Studios {
    edges?: EdgesEntity[] | null;
}
interface EdgesEntity {
    isMain: boolean;
    node: Node;
}
interface Node {
    id: number;
    name: string;
}