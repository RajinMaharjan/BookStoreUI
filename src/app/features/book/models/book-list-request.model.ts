export interface BookListRequest{
    id: string;
    title: string;
    category: string;
    author: string;
    yearPublished: string;
    price: number;
    imageUrl: string;
    description: string;
    available: boolean;
    userId: string | null;
    user: any; 
}