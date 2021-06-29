import React from 'react';
import { Heart, MessageCircle } from 'react-feather';

export default function PostReactions({ likes, onClick }) {
  /**
   * Since the API doesn't deliver the number of comments from a post
   * whether it has comments or not, I decided to generate a random number
   * to simulate
   */
  const randomNumber = Math.floor(Math.random() * 60);

  return (
    <div className="reactions">
      <div className="trigger">
        <Heart /> {likes} likes
      </div>
      <div className="trigger" onClick={onClick}>
        <MessageCircle /> {randomNumber} comments
      </div>
    </div>
  );
}
