function Modal({ children, setIsModalOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setIsModalOpen(false)}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xs bg-white shadow-lg">
        <div className="pl-1">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
