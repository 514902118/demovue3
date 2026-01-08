import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetUno(), // 核心预设（必选）
    presetAttributify({
      prefix: 'uno:', // 自定义属性前缀（可选）
      ignored: ['v-if', 'v-for'], // 忽略 Vue 指令
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx({
      blocklist: [/^v-/, 'data-test'], // 忽略 v- 前缀属性和测试属性
    }),
  ],
  // ...UnoCSS options
  // 一些实用的自定义组合
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-x-between': 'flex items-center justify-between',
    'flex-x-end': 'flex items-center justify-end',
    'wh-full': 'w-full h-full',
    'text-truncate': 'whitespace-nowrap overflow-hidden text-ellipsis',
    'bg-no-repeat-contain': 'bg-no-repeat bg-contain',
    'bg-no-repeat-cover': 'bg-no-repeat bg-cover',
    'abs-full': 'absolute left-0 right-0 top-0 bottom-0',
    'abs-x-center': 'absolute left-50% top-0 translate-x--1/2',
    'abs-y-center': 'absolute left-0 top-50% translate-y--1/2',
    'abs-center': 'absolute left-50% top-50% translate-x--1/2 translate-y--1/2',
    'text-overflow': 'overflow-hidden whitespace-nowrap text-ellipsis', // 文本溢出显示省略号
    'text-break': 'whitespace-normal break-all break-words', // 文本溢出换行
  },
})
