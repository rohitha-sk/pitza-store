function Header() {
  return (
    <header className="bg-amber-600 py-8 pb-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center items-center">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-white uppercase tracking-wide">
          🍕 Pitza Co.
        </h1>
        <h3 className="text-lg text-amber-100 mt-2 italic">
          Authentic Italian Pizza, Made Fresh Daily
        </h3>
      </div>
    </header>
  )
}

export default Header