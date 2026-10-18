import "./Blog.css";

const posts = [
  { id: 1, img: "blog1", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is?" },
  { id: 2, img: "blog2", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is?" },
  { id: 3, img: "blog3", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is?" },
  { id: 4, img: "blog4", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is?" },
  { id: 5, img: "blog5", date: "Sep 26, 2021", title: "GPT-3 and Open AI is the future. Let us explore how it is?" },
];

function Article({ post, featured = false }) {
  return (
    <article className={`gpt3-article ${featured ? "gpt3-article--featured" : ""}`}>
      <div className={`gpt3-article__img ${post.img}`} />
      <div className="gpt3-article__content">
        <div>
          <p className="gpt3-article__date ">{post.date}</p>
          <h3 className="gpt3-article__title">{post.title}</h3>
        </div>
        <p className="gpt3-article__link">Read Full Article</p>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section className="gpt3-blog">
      <h1 className="gradient-text gpt3-blog__heading">
        A lot is happening,
        <br />
        We are blogging about it.
      </h1>

      <div className="gpt3-blog__container">
        <div className="gpt3-blog__groupA">
          <Article post={posts[0]} featured />
        </div>
        <div className="gpt3-blog__groupB">
          {posts.slice(1).map((p) => (
            <Article key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}