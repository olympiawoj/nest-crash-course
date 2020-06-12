import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto'

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return `Get all items`
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`
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
