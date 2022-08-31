const WidgetTags = () => {
  const tags = [
    'c',
    'css',
    'firebase',
    'html',
    'java',
    'javascript',
    'mern',
    'express.js',
    'mongodb',
    'mysql',
    'node.js',
    'next.js',
    'php',
    'python',
    'react.js',
  ]
  return (
    <div className="widget-tags">
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default WidgetTags
