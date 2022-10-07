import "@/components/card/Card.css";
import IconWrap from "@/components/icons/IconWrap";
import { posts } from "@/components/card/postsdata";

export default function Card() {
  const itemPost = posts.map((post) => (
    <article className="items-card" key={post.id}>
      <div className="images-card">
        <img src={post.image} alt="" />
      </div>
      <div className="description-card">
        <p className="text-date-card">{post.date}</p>
        <h2 className="text-title-card">
          {post.title} <a href="#">{<IconWrap />}</a>
        </h2>
        <p className="text-description-card">{post.description}</p>
        <ul className="type-card">
          <li id="Research">Desing</li>
          <li id="Presentation">Presentation</li>
        </ul>
      </div>
    </article>
  ));

  return itemPost;
}
