const Layout = ({ children }) => {
  return (
    <div className="bg-[url('/public/bosque.png')] bg-no-repeat bg-cover px-8 min-h-screen flex flex-row-reverse justify-evenly items-center mg:flex-col-reverse">
      {children}
    </div>
  )
}

export default Layout;
