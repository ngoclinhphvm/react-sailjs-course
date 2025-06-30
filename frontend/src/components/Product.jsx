const Product = ({ name, price, image, view = "grid", onDelete, onModify }) => {
  // TODO: make this grow as its container grows
  return view == "grid" ? (
    <div className="flex max-w-md min-w-xs flex-col items-center justify-center border-e-red-100">
      <img src={image} />
      <div className="w-full overflow-hidden text-center text-lg font-medium text-ellipsis whitespace-nowrap">
        {name}
      </div>
      <div>${price}</div>
    </div>
  ) : (
    <div className="grow-1">
      <hr className="text-gray-400" />
      <div className="flex h-10 items-center gap-10">
        <input type="checkbox" className="size-4" />
        <img src={image} className="h-full min-w-10" />
        <div className="basis-80 overflow-hidden text-lg font-medium text-ellipsis whitespace-nowrap">
          {name}
        </div>
        <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap">
          ${price}
        </div>
        {/* Modify button */}
        <button onClick={onModify}>
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/create-new.png"
            className="border-full size-8 cursor-pointer rounded-full border-1 border-black p-1"
          />
        </button>
        {/* Delete button */}
        <button onClick={onDelete}>
          <img
            src="https://img.icons8.com/ios/50/cancel.png"
            className="inline-block size-8 cursor-pointer rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Product;
