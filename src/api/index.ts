import request from '@/utils/request'

export function getTodoList(){
    return request({
        url: '/user/list',
        method: 'get'
    })
}