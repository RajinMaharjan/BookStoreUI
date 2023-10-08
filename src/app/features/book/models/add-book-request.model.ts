export interface AddBookRequest{
    title: string;
    category: string;
    author: string;
    yearPublished: Date;
    price: number;
    image: File | null;
    description:string;

}