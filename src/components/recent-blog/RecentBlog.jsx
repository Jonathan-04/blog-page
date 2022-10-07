import "@/components/recent-blog/RecentBlog.css";
import IconWrap from "@/components/icons/IconWrap";
import Image1 from "@/assets/images/Image1.png";
import Image2 from "@/assets/images/Image2.png";
import Image3 from "@/assets/images/Image3.png";

export default function RecentBlog() {
  return (
    <>
      <section className="container-recent-blogs">
        <h2 className="title-container-recent">Recent blog posts</h2>
        <div className="first-recent-blog">
          <article className="item-card">
            <div className="image-card">
              <img src={Image1} alt="" />
            </div>
            <div className="description-card">
              <p className="text-date-card">Olivia Rhye • 20 Jan 2022</p>
              <h2 className="text-title-card">
                UX review presentations <a href="#">{<IconWrap />}</a>
              </h2>
              <p className="text-description-card">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <ul className="type-card">
                <li id="Design">Design</li>
                <li id="Research">Research</li>
                <li id="Presentation">Presentation</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="second-recent-blog">
          <article className="item-card">
            <div className="image-card">
              <img src={Image2} alt="" />
            </div>
            <div className="description-card">
              <p className="text-date-card">Phoenix Baker • 19 Jan 2022</p>
              <h2 className="text-title-card">
                Migrating to Linear 101 <a href="#">{<IconWrap />}</a>
              </h2>
              <p className="text-description-card">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get...
              </p>
              <ul className="type-card">
                <li id="Design">Design</li>
                <li id="Research">Research</li>
              </ul>
            </div>
          </article>
          <article className="item-card">
            <div className="image-card">
              <img src={Image3} alt="" />
            </div>
            <div className="description-card">
              <p className="text-date-card">Lana Steiner • 18 Jan 2022</p>
              <h2 className="text-title-card">
                Building your API Stack <a href="#">{<IconWrap />}</a>
              </h2>
              <p className="text-description-card">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </p>
              <ul className="type-card">
                <li id="Design">Design</li>
                <li id="Research">Research</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
