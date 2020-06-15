import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    //brackets for an array
    private readonly items: Item[] = [
        {
            id: "3434343545",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "98495485",
            name: "Item Two",
            qty: 50,
            description: "This is item two"
        },
    ]

    // return an array of items
    findAll(): Item[] {
        return this.items
    }

    // returns a single item
    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }
}
