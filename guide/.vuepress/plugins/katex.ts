import { Plugin } from '@vuepress/core';
import katex from 'markdown-it-katex';

const katexPlugin: Plugin = () => ({
    name: 'vuepress-plugin-katex',
    extendsMarkdown: md => md.use(katex),
});

export default katexPlugin;