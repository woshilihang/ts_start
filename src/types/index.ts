// 项目公共类型文件
export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'OPTIONS'
  | 'options'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
