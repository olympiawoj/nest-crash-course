// An interface defines the fields you want for a particular resource and their types
// Question mark means it's optional - we won't always include id

export interface Item {
    id?: string;
    name: string;
    description?: string;
    qty: number
}