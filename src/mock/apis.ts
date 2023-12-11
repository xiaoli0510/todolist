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
        'name|+1':['吃饭','睡觉','打豆豆'] //得到随机标题
      }]
    })
    },
  },
  // GetToken
  {
    url: "/auth/oauth/token",
    type: "post",
    response: (option: any) => {
      const $name = JSON.parse(option.body).name;
      if ($name) {
        return Mock.mock({
          code: 200,
          message: "成功",
          data: {
            name: "testToken",
          },
        });
      } else {
        return Mock.mock({
          code: 400,
          message: "未提交参数",
        });
      }
    },
  },
];
