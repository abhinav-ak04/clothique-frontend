function DeliveryCharacteristics({ Icon, content }) {
  return (
    <div className="flex items-center gap-5 pb-3.5">
      <Icon className="text-3xl text-zinc-600" />
      <p className="text-[15px] font-bold text-zinc-800">{content}</p>
    </div>
  );
}

export default DeliveryCharacteristics;
