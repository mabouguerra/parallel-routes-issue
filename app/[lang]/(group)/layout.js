export default function Layout({ children, auth }) {
  return (
    <div>
      {auth}
      {children}
    </div>
  );
}
