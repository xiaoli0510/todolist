import {type GetTodoListModel} from './model/todoListModel'
import request from '@/utils/request'

export function getTodoList(){
    return request<GetTodoListModel[]>({
        url: '/upms/user/info',
        method: 'get',
        params: {
            page: 1,
            pageSize: 10
        }
    })
}