import Mock from "mockjs";
import {type MockParams } from "./typing";
import apis from "./apis";
const mocks = [...apis];
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