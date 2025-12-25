export default function SystemLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>
        {/* Content */}
        <div className="relative z-10 flex-grow max-w-7xl mx-auto px-4 py-12">
            {children}
        </div>
    </div>
  );
}