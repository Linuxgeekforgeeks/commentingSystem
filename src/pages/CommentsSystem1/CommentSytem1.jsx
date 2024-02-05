import { useId, useState } from "react";
import "./CommentsSytem1.css";
import { DummyComments } from "../../api/dummyComments";

function CommentSytem1() {
  const [comments, setComments] = useState(DummyComments);
  const [inputComment, setInputComment] = useState("");

  const submitComment = (e) => {
    const id = Math.random();
    e.preventDefault();
    if (inputComment === "") return;
    setComments([...comments, { id, body: inputComment }]);
    setInputComment("");
  };
  return (
    <div className="comments">
      <h2>Hello it's CodewithMudy here.</h2>
      <div className="comments__body">
        <form onSubmit={submitComment} className="comments__input">
          <input
            type="text"
            placeholder="Whats are your Thought?"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          />
          <button>Comments</button>
        </form>
        <div className="comments__output">
          {comments.map((comment) => (
            <CommentItem comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSytem1;

function CommentItem({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [repliedInput,setRepliedInput]=useState("")
  const [repliedComments,setRepliedComments]=useState([])
  const onReplySubmit=(e)=>{
    e.preventDefault()
    if(repliedInput==="")return
    setRepliedComments([{repliedComment:repliedInput},...repliedComments])
    setRepliedInput("")
  }
  return (
    <div key={comment.id} className="singleComment">
      <h3>{comment.body}</h3>
      {isReplying ? (
        <button
          style={{ padding: "5px", borderRadius: "10px" }}
          onClick={() => setIsReplying(!isReplying)}
        >Cancel
          
        </button>
      ) : (
        <button
          style={{ padding: "5px", borderRadius: "10px" }}
          onClick={() => setIsReplying(!isReplying)}
        >
          reply
        </button>
      )}
      {isReplying && (
        <form onSubmit={onReplySubmit} className="showReply">
          <input placeholder="What are your thoughts?" value={repliedInput} onChange={(e)=>setRepliedInput(e.target.value)} />
        </form>
      )}
      {repliedComments.map((comment,index)=>(
        <p style={{border:"1px solid black"}} key={index}>{comment.repliedComment}</p>
      ))}
    </div>
  );
}
