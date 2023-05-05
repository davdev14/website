import React from 'react'
import styles from './../style/widgets/MarkdownViewer.module.css'
import rehypeRaw from "rehype-raw";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownViewer({style={}, markdownAsset}) {
  const content = require('./../../../data/markdown/'+markdownAsset);
  
  return (
    <div style={style}>
      <ReactMarkdown className={styles.container}  rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {content.default}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownViewer