import Mock from "mockjs";
export default [
  // GetUserInfo
  {
    url: "/user/list",
    type: "get",
    response: () => {
      return Mock.mock({
        "list|3":[
        {
        'id|+1':0,//得到随机id,
        'name|+1':['吃饭','睡觉','打豆豆'], //得到随机标题
        'checked|1':'@boolean',
      }]
    })
    },
  },
];
