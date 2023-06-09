import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
// :url은 param으로 불러오기
export class DmsController {
    @ApiParam({
        name: 'url',
        required: true,
        description: '워크스페이스 url',
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: '사용자 아이디',
    })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한 번에 가져오는 개수',
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지',
    })
    @Get(':id/chat')
    // getChat(@Query('perPage') perPage, @Query('page') page) {
    //     console.log(perPage, page);
    // };
    getChat(@Query() query,@Param() param) {
        console.log(query.perPage, query.page);
    };

    @Post(':id/chats')
    postChat(@Body() body) {

    }
}
