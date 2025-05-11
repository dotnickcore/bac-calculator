export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center h-screen w-full bg-sky-200 py-8">
    {children}
  </div>
);