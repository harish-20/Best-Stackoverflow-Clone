import './Avatar.css'

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    marginRight: '10px',
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || 'pointer',
    display: 'inline-block',
  }

  return <div style={style}>{children}</div>
}

export default Avatar
