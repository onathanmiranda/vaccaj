import _metadata from "./_metadata";

export const metadata = _metadata;

export default function Layout({ children }){
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}