//导入axios
import axios from "axios";
//以axios创建axios实例
const service = axios.create({
  baseURL: "http://ceshi13.dishait.cn",
});
export default service;
