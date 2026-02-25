import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "24px" }}>{children}</main>
      <footer style={{ backgroundColor: "#1a1a1a", color: "#fff", textAlign: "center", padding: "16px", fontSize: "14px" }}>
        <p>My App &copy; 2026. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AppShell;
