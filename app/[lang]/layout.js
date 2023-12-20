export default function RootLayout({ children, auth, params: { lang } }) {
  return (
    <html lang={lang}>
      <body>
        {auth}
        {children}
      </body>
    </html>
  );
}
