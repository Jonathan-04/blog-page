import "@/App.css";
import Header from "@/components/header/Header";
import Subscribe from "@/components/subscribe/Subscribe";
import RecentBlog from "@/components/recent-blog/RecentBlog";
import AllBlog from "./components/all-blog/AllBlog";
import Pagination from "./components/pagination/Pagination";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Subscribe />
      <RecentBlog />
      <AllBlog />
      <Pagination />
      <Footer />
    </>
  );
}

export default App;
