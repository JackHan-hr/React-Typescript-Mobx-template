/**
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明全局对象（含有子属性）
 * interface 和 type 声明全局类型
 */

/**
 * 单行忽略
 * // @ts-ignore
 * 忽略全文
 * // @ts-nocheck
 * 取消忽略全文
 * // @ts-check
 */

declare interface PlainObject {
  [propName: string]: any;
}

declare interface BooleanObject {
  [propName: string]: boolean;
}

declare interface StringObject {
  [propName: string]: string;
}

declare interface NumberObject {
  [propName: string]: number;
}
