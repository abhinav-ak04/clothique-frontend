function ProductImages({ imgs }) {
  return (
    <div className="flex w-[58%] flex-wrap gap-2">
      {imgs.map((url, idx) => (
        <img
          src={url}
          alt={`Product Image ${idx + 1}`}
          key={idx + 1}
          className="h-auto w-[49%]"
        />
      ))}
    </div>
  );
}

export default ProductImages;
