import Mock from 'mockjs'
// 设置拦截Ajax请求的响应时间，模拟网络延迟
Mock.setup({
  timeout: '200-600'
})
// Mock数据示例
Mock.mock('/api/getList', {
  'list|10-20': [{
    'id|+1': 1,
    'title': '@ctitle(10, 20)',
    'image': '@image(\'200x100\', \'#50B347\', \'Hello\')',
    'datetime': '@datetime()',
    'author': '@cname()',
    'description': '@ctitle(30, 100)'
  }]
})
export default Mock