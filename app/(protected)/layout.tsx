import ProtectedRoute from "./_components/protected-route";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
