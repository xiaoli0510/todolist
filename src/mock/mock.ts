import Mock from "mockjs";
import {type MockParams } from "./typing";
import apis1 from "./apis1";
import apis2 from "./apis2";
const mocks = [...apis1, ...apis2];
//设置延时时间
Mock.setup({
  timeout: "300",
});

export function mockXHR() {
  let i: MockParams;
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || "get", i.response);
  }
}


// Mock数据示例
// Mock.mock('/api/getList', {
//   'list|10-20': [{
//     'id|+1': 1,
//     'title': '@ctitle(10, 20)',
//     'image': '@image(\'200x100\', \'#50B347\', \'Hello\')',
//     'datetime': '@datetime()',
//     'author': '@cname()',
//     'description': '@ctitle(30, 100)'
//   }]
// })
// export default Mock