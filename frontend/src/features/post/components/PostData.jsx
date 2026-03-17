import React from 'react'

const Post = ({ user, post, loading, handleLike, handleUnLike }) => {


    return (
        <div>
            <div className="post">

                <div className="user">
                    <div className="img-wrapper">
                        <img
                            src={ "https://imgs.search.brave.com/2UY52qbEbiKu7a4muAJHiulqaNEp541WWMTQiKt61yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0L2Ez/L2I2Lzc0YTNiNmE4/ODU2YjAwNGRmZmY4/MjRhZTk2NjhmZTli/LmpwZw   "}
                            alt="post"
                        />
                    </div>
                    <p>{user.username}</p>
                </div>

                <img
                    src={post.imgUrl}
                    alt=""
                />

                <div className="icons">
                    <div className="left">
                        <button className={post.isLiked ? "like" : ""}>

                            <i
                                onClick={() => { post.isLiked ? handleUnLike(post._id) : handleLike(post._id) }}
                                className="ri-heart-fill"></i>
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
