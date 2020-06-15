import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
    //itemsService can be anything you want, ItemsService is what we imported
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id)
    }


    @Post()
    // We're putting in our CreateItemDto - now we have access to createItemDto inside the function
    // e.g. createItemDto.name, createItemDto.quantity
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }

    @Put(':id')
    //Need Body to get info to update
    //Also need params
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`
    }
}
