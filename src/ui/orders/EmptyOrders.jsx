function EmptyOrders() {
  return (
    <div className="m-15 flex grow flex-col items-center">
      <img src="/empty-orders.png" alt="Empty Orders" className="h-auto w-72" />
      <h2 className="mt-5 block text-[20px] font-bold text-zinc-700">
        You haven&apos;t placed any order yet!
      </h2>
      <p className="mt-2 text-center text-sm text-zinc-600">
        Order section is empty. After placing order, You can track them from
        here!
      </p>
    </div>
  );
}

export default EmptyOrders;
