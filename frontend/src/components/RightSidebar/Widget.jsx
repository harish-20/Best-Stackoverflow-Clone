import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/soBlack.png'
import comment from '../../assets/comment.png'

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} width="18" alt="pen" />
          <p>Observability is key to the future of software</p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={pen} width="18" alt="pen" />
          <p>Podcast 576:How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img
            src={comment}
            style={{ marginTop: '-5px' }}
            width="21"
            alt="comment"
          />
          <p>Review queue workflow - Final release...</p>
        </div>
        <div className="right-sidebar-div-2">
          <img
            src={comment}
            style={{ marginTop: '-5px' }}
            width="21"
            alt="comment"
          />
          <p>Please welcome valued assosciates: #958-V2Blast #957-SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img
            src={blacklogo}
            style={{ marginTop: '-5px' }}
            width="21"
            alt="comment"
          />
          <p>
            Outdated Answers: accepted answers is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>
            39 Why was this span flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>
            45 What is best course of action when user has high to enough rep to
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>19 is a link to the "how to ask" help page is useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget

// <img src={pen} width="50px" alt="pen" />
//       <img src={blacklogo} width="50px" alt="logo" />
//       <img src={comment} width="50px" alt="comment" />
