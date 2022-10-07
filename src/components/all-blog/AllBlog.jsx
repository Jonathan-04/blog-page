import "@/components/all-blog/AllBlog.css";
import Card from "@/components/card/Card";

export default function AllBlog() {
  return (
    <section className="container-all-blog">
      <div className="title-all-blog">
        <h2>All blog posts</h2>
      </div>
      <div className="container-items-cards">
        <Card />
      </div>
    </section>
  );
}
