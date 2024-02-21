// 因为MDXComponents组件不允许使用wrap,这个目录是我自己手工创建出来的,
// 目的就是为了全局引用高亮组件,而不必在每个mdx文件中都声明一遍import
// [refer]: https://stackoverflow.com/questions/62022266/how-do-i-embed-global-react-components-in-docusaurus-v2

import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX

    Highlight,
};