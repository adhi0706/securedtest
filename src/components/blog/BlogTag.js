const BlogTag = ({ tag, selected = false, onClick = {} }) => {
  return (
    <div
      onClick={onClick}
      className={`blog-tag ${tag === selected && "selected-tag"}`}>
      {tag}
    </div>
  );
};

export default BlogTag;
