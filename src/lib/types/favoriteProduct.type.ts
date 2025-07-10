export interface FavoriteProduct {
    id: string;
    product: {
        name: string;
        databaseId: number;
        price: string;
        image: {
            sourceUrl: string;
        };
    };
    user: {
        databaseId: number;
        username: string;
    };
    addedDate: string;
}