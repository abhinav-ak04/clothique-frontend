function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div
        className="animate-spin rounded-full"
        style={{
          width: '56px',
          height: '56px',
          background: `
            radial-gradient(farthest-side, #ff3f6c 94%, #0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%, #ff3f6c)
          `,
          WebkitMask: `radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0)`,
          mask: `radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0)`,
        }}
      />
    </div>
  );
}

export default Loader;
