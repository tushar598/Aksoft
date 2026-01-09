import React from 'react';
import { User, FileText, BadgeCheck, Plus } from 'lucide-react';

export const StudentCard = ({ student }) => {
  return (
    <div className="student-card  group relative bg-[#C9D2D3] border-10 border-white rounded-[2rem] shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
        {/* Profile Image */}
        <img
          src={student.imageUrl}
          alt={student.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white/80 via-white/80 to-transparent pointer-events-none " />

        {/* Content Area - Positioned absolutely at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pt-0 flex flex-col justify-end h-full pointer-events-none">
          
          {/* Text Content */}
          <div className="pointer-events-auto">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {student.firstName} <span className="text-gray-700">{student.lastName}</span>
              </h3>
            </div>

            <p className="text-gray-600 text-[15px] leading-snug font-medium mb-5 line-clamp-2">
              {student.role}
            </p>

            {/* Footer Stats & Action */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-gray-500" strokeWidth={2.5} />
                  <span className="text-sm font-semibold">
                    {student.roles}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-gray-500" strokeWidth={2.5} />
                  <span className="text-sm font-semibold">
                    {student.projects}
                  </span>
                </div>
              </div>

              <button className="flex items-center gap-1 bg-gray-200/80 backdrop-blur-sm hover:bg-gray-300 active:scale-95 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm">
                LinkedIn <Plus className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
