function NoAddressFallback() {
  return (
    <div className="mt-5 flex w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="/add-location.png"
          alt="Location Pointer Icon"
          className="mt-10 h-auto w-48"
        />
        <p className="text-sm font-bold text-zinc-900">
          SAVE YOUR ADDRESSES NOW
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Add your home and office addresses and enjoy faster checkout
        </p>
        <button className="mt-8 cursor-pointer rounded-sm border-1 border-zinc-300 px-7 py-2.5 text-sm font-bold text-indigo-500">
          + ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
}

export default NoAddressFallback;
