function Logo() {
  return (
    <div className="bg-welcome300 flex justify-between">
      <div className="ml-7 flex flex-col justify-evenly">
        <div>
          <p className="text-[20px] leading-none font-bold">Flat ₹300 OFF +</p>
          <p className="text-[20px] font-bold">Free Shipping</p>
          <p className="text-gray-600">On First Order</p>
        </div>
        <div>
          <span>Code: </span>
          <span className="rounded-xs border-2 border-dashed border-zinc-400 p-1 text-sm font-bold">
            WELCOME300
          </span>
        </div>
      </div>
      <img
        src="/Welcome300.jpg"
        alt="Welcome300 Coupon"
        className="h-auto w-[180px]"
      />
    </div>
  );
}

export default Logo;
