// "use client";

// import React from "react";
// import { OptimizedImage } from "@/components";
// import { MockJsonData } from "@/data/navData";

// interface Props {
//   products?: string[];
// }

// const FixturePicker: React.FC<Props> = ({ products }) => {
//   return (
//     <div className="w-full">
//       <p className="text-white text-sm mb-1">Fixture</p>
//       <div className="flex items-center gap-2 overflow-x-auto">
//         {products && products?.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => onSelect(item.thumbnail)}
//             className={`border ${images === item.thumbnail ? "border-white/50" : "border-transparent"} p-1 rounded`}
//           >
//             <OptimizedImage
//               src={item.thumbnail}
//               alt={item.title}
//               width={36}
//               height={36}
//               className="rounded"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FixturePicker;
