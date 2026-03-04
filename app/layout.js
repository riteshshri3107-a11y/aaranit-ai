export const metadata = {
  title: 'Aarnait AI Portal',
  description: 'Admin, Teacher, Student portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          background: '#050816',
          color: 'white',
        }}
      >
        {children}
      </body>
    </html>
  );
}
