import "@/components/subscribe/Subscribe.css";

export default function Subscribe() {
  return (
    <section className="container-subscribe">
      <ul className="container-stories">
        <li>Our blog</li>
        <li>
          <h1>Stories and interviews</h1>
        </li>
        <li>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </li>
      </ul>
      <div className="container-email">
        <ul>
          <li className="input-text">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </li>
          <li className="input-button">
            <button>Subscribe</button>
          </li>
        </ul>
        <p className="privacy">
          We care about your data in our <a href="#">privacy policy</a>
        </p>
      </div>
    </section>
  );
}
