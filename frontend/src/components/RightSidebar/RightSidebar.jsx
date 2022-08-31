import Widget from './Widget'
import WidgetTags from './WidgetTags'

import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Widget />
      <WidgetTags />
    </div>
  )
}

export default RightSidebar
