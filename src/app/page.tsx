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

// export default function LatihanGrid(){
//   return (
//     <>
//       <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
//           <div className="font-bold text-2xl tracking-tighter text-indigo-600">NEWS.</div>
//           <nav className="flex gap-6 text-sm font-medium text-slate-500">
//             <a href="#" className="hover:text-indigo-600">Politics</a>
//             <a href="#" className="hover:text-indigo-600">Tech</a>
//             <a href="#" className="hover:text-indigo-600">Sports</a>
//           </nav>
//         </div>
//       </header>
//       <div className="min-h-screen p-10 bg-gray-100">
//         <h1 className="mb-4 font-bold">Latihan Grid Layout</h1>
//         <div className="grid grid-cols-3 gap-4 text-black">
//           <div className="bg-white p-6 shadow rounded">Kotak 1</div>
//           <div className="bg-white p-6 shadow rounded">Kotak 2</div>
//           <div className="bg-white p-6 shadow rounded">Kotak 3</div>
//           <div className="bg-blue-100 p-6 shadow rounded col-span-2 border-2 border-blue-500">Kotak 4 (col-span-2)</div>
//           <div className="bg-white p-6 shadow rounded">Kotak 5</div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default function LatihanFinal(){
//   return(
//     // Parent Utama: Container Halaman
//     <main className="min-h-screen bg-slate-50 font-sans text-slate-900">

//       {/* 1. Header (Flexbox) */}
//       <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
//           <div className="font-bold text-2xl tracking-tighter text-indigo-600">NEWS.</div>
//           <nav className="flex gap-6 text-sm font-medium text-slate-500">
//             <a href="#" className="hover:text-indigo-600">Politics</a>
//             <a href="#" className="hover:text-indigo-600">Politics</a>
//             <a href="#" className="hover:text-indigo-600">Politics</a>
//           </nav>
//         </div>
//       </header>

//       {/* 2. Content Area (Grid) */}
//       <div className="max-x-6xl mx-auto px-4 py-8">

//         {/* Grid Utama: 3 Kolom (Desktop), 1 Kolom (Mobile) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Kolom Kiri (Berita Utama) */}
//           <section className="md:col-span-2 flex flex-col">
            
//             {/* Kartu Berita Besar */}
//             <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
//               <div className="h-64 bg-slate-300 w-full"></div> {/* Placeholder Gambar */}
//               <div className="p-6">
//                 <span className="text-indigo-600 text-xs font-bold uppercase tracking-wide">Technology</span>
//                 <h2 className="text-3xl font-bold mt-2 mb-3 leading-tight">Next.js 14 Rilis</h2>
//                 <p className="text-slate-500 mb-4">Panduan lengkap memahami server components dan cara menggunakannya untuk performa maksimal...</p>
//                 <button className="text-indigo-600 font-semibold text-sm hover:underline">Read More</button>
//               </div>
//             </article>

//             {/* Grid Kecil di dalam kolom kiri */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Kartu Berita Kecil 1 */}
//               <article className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
//                 <div className="h-32 bg-slate-200 rounded-lg mb-4"></div>
//                 <h3 className="font-bold text-lg">Tips CSS GRID</h3>
//               </article>
//               {/* Kartu Berita Kecil 2 */}
//               <article className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
//                 <div className="h-32 bg-slate-200 rounded-lg mb-4"></div>
//                 <h3 className="font-bold text-lg">Belajar Flexbox</h3>
//               </article>
//             </div>
//           </section>

//           {/* Kolom Kanan (Sidebar) */}
//           <aside className="flex flex-col gap-6">

//             {/* Widget Trending */}
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
//               <h3 className="font-bold text-lg mb-4 border-b pb-2">Trending Now</h3>
//               <ul className="flex flex-col gap-4">
//                 <li className="flex gap-3 items-start">
//                   <span className="text-slate-300 font-bold text-2xl">01</span>
//                   <p className="font-medium hover:text-indigo-600 cursor-pointer">Cara menjadi Frontend Dev dalam 1 bulan</p>
//                 </li>
//                 <li className="flex gap-3 items-start">
//                   <span className="text-slate-300 font-bold text-2xl">02</span>
//                   <p className="font-medium hover:text-indigo-600 cursor-pointer">Tutorial React untuk pemula</p>
//                 </li>
//                 <li className="flex gap-3 items-start">
//                   <span className="text-slate-300 font-bold text-2xl">03</span>
//                   <p className="font-medium hover:text-indigo-600 cursor-pointer">Kenapa Tailwind populer?</p>
//                 </li>
//               </ul>
//             </div>

//             {/* Widget Iklan/Subscribe */}
//             <div className="bg-indigo-600 p-6 rounded-2xl text-white text-center">
//               <h3 className="font-bold text-xl mb-2">Newsletter</h3>
//               <p className="text-indigo-100 text-sm mb-4">Dapatkan tips coding setiap minggu.</p>
//               <input type="email" placeholder="Email kamu" className="w-full bg-white px-4 py-2 rounded-lg text-slate-900 text-sm mb-2 outline-none"/>
//               <button className="w-full bg-indigo-800 py-2 rounded-lg font-bold text-sm hover:bg-indigo-900 cursor-pointer">Subscribe</button>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </main>
//   )
// }

import ProductCard from "../components/ProductCard";

export default function ShopPage(){
  return(
    <main className="min-h-screen bg-slate-50 p-10 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-slate-900">Katalog Produk</h1>
      <div className="flex flex-row gap-8">
        <ProductCard
          image="/img1.jpg"
          name="Sepatu Nike Air"
          price="Rp 1.500.000"
        />
        <ProductCard
          image="/img1.jpg"
          name="Sepatu Nike Air"
          price="Rp 1.500.000"
        />
        <ProductCard
          image="/img1.jpg"
          name="Sepatu Nike Air"
          price="Rp 1.500.000"
        />
      </div>
    </main>
  )
}