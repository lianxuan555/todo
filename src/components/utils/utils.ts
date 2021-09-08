import { is } from 'immer/dist/internal'
import { CSSProperties } from 'react'

/** 变量是否是对象 */
export function isObject(obj?: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/** 变量是否是数组 */
export function isArray(arr?: any) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 合并style
 * @param baseStyles 合并前style
 * @param mergeStyles 要合并进入style
 */
export function mergeStyles(
  baseStyles: CSSProperties,
  mergeStyles: CSSProperties
): CSSProperties {
  return Object.assign(baseStyles, mergeStyles)
}
