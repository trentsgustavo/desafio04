import React from 'react';


function PostHeader({author, date}){
  return (
    <div>
      <p>
        <span>{author.name}</span>
        <span>{date}</span>
      </p>
    </div>
  );
}

function PostComments({comments}){
  return (
    <div>
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <span>{comment.author.name}</span>
            {comment.content}
          </div>
        ))}
      </div>
    </div>
  );
}

function Post({author, date, content, comments}){
  return (
    <div>
      <PostHeader author={author} date={date}/>
      <p>{content}</p>
      <PostComments comments={comments}/>
    </div>
  );
}


export default Post;