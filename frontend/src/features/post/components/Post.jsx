import React from 'react'

const Post = ({user , post }) => {
  return (
    <div>
         <div className="post">

                        <div className="user">
                            <div className="img-wrapper">
                                <img src={<img 
  src={post.imgUrl || "https://via.placeholder.com/500"} 
  alt="post"
/>} />
                            </div>
                            <p>{user.username}</p>
                        </div>

                        <img
                            src={post.imgUrl}
                            alt=""
                        />

                        <div className="icons">
                            <div className="left">
                                <button className={post.isLiked?"like":""}>
                                    <i className="ri-heart-fill"></i>
                                </button>
                                <button>
                                   <i className="ri-home-line"></i>
                                </button>
                                   <button>
                                   <i className="ri-user-line"></i>
                                </button>
                              
                            </div>

                            <button><i className="ri-bookmark-line"></i></button>
                        </div>

                        <div className="bottom">
                            <p className="caption">
                                <b>{user.username}</b> {post.caption}
                            </p>
                        </div>

                    </div>
    </div>
  )
}

export default Post
