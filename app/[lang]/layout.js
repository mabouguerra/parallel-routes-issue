export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
