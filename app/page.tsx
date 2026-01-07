export default function LatihanFlexBox(){
  return (
   <div className="min-h-screen p-10 bg-gray-100">
    <h1 className="mb-4 font-bold text-black">Latihan Flexbox Navbar</h1>
    <nav className="flex flex-row gap-5 justify-between items-center bg-white p-4 shadow-md rounded-lg">
      <div className="font-bold text-xl text-blue-600">MyLogo</div>
      <div className="flex gap-4 text-gray-600">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ">Login</button>
    </nav>
   </div> 
  )
}