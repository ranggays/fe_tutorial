// export default function LatihanFlexBox(){
//   return (
//    <div className="min-h-screen p-10 bg-gray-100">
//     <h1 className="mb-4 font-bold text-black">Latihan Flexbox Navbar</h1>
//     <nav className="flex flex-row gap-5 justify-between items-center bg-white p-4 shadow-md rounded-lg">
//       <div className="font-bold text-xl text-blue-600">MyLogo</div>
//       <div className="flex gap-4 text-gray-600">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//       </div>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ">Login</button>
//     </nav>
//    </div> 
//   )
// }

export default function LatihanGrid(){
  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter text-indigo-600">NEWS.</div>
          <nav className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-indigo-600">Politics</a>
            <a href="#" className="hover:text-indigo-600">Tech</a>
            <a href="#" className="hover:text-indigo-600">Sports</a>
          </nav>
        </div>
      </header>
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="mb-4 font-bold">Latihan Grid Layout</h1>
        <div className="grid grid-cols-3 gap-4 text-black">
          <div className="bg-white p-6 shadow rounded">Kotak 1</div>
          <div className="bg-white p-6 shadow rounded">Kotak 2</div>
          <div className="bg-white p-6 shadow rounded">Kotak 3</div>
          <div className="bg-blue-100 p-6 shadow rounded col-span-2 border-2 border-blue-500">Kotak 4 (col-span-2)</div>
          <div className="bg-white p-6 shadow rounded">Kotak 5</div>
        </div>
      </div>
    </>
  )
}