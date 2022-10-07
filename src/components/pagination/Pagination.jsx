import "@/components/pagination/Pagination.css";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";

export default function Pagination() {
  return (
    <section className="container-pagination">
      <div>
        <button className="button-pagination" id="btn-previous">
          <ArrowLeft /> <span> Previous</span>
        </button>
      </div>
      <div>
        <ul className="items-pagination">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <p>
          Page <span>1</span> of <span>10</span>
        </p>
      </div>
      <div>
        <button className="button-pagination" id="btn-next">
          <span>Next</span> <ArrowRight />
        </button>
      </div>
    </section>
  );
}
