import React from 'react';
import styled from 'styled-components';

// children是React中的一个特殊prop，用于包裹传递给组件的任何子元素内容。在这里，{children}将被替换为调用该组件时放置在其内部的所有内容。
// color是这个prop用于接收一个字符串类型的CSS颜色值。比如，当你调用 <Highlight color="#ff0000">Hello World</Highlight>时，color prop就会接收到 "#ff0000" 这个值。
export default function Highlight({children, color}) {
    return (
        <span
            style={{
                backgroundColor: color,  // backgroundColor: 使用传入的color prop作为背景色。
                borderRadius: '2px',  // borderRadius: 设置元素的边框圆角为2像素，使高亮区域呈现圆角矩形效果。
                color: '#fff',  // color: 将文字颜色设置为白色，与可能的深色背景形成对比，以提高可读性。
                padding: '0.2rem',  // padding: 给元素内部增加0.2rem的内边距，让高亮区域有一定的空白空间。
            }}>
      {children}
    </span>
    );
}