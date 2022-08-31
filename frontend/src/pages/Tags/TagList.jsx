import './Tags.css'

const TagList = ({ tagName, tagDescription }) => {
  return (
    <div className="tag">
      <h5 className="tag-h1">{tagName}</h5>
      <p className="tag-p">{tagDescription}</p>
    </div>
  )
}

export default TagList
