import React from "react";

export const SunDoodle = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 15V5M50 95V85M15 50H5M95 50H85M25.25 25.25L18.18 18.18M81.82 81.82L74.75 74.75M25.25 74.75L18.18 81.82M81.82 18.18L74.75 25.25"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export const LoopDoodle = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 90C30 90 40 70 30 60C20 50 10 70 30 80C50 90 60 40 40 30C20 20 20 60 50 70C80 80 90 20 70 20"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const InstructionIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7H13V9H11V7ZM13 17H11V11H13V17Z" />
    <path
      d="M16 12L14.5 13.5L11 10V14H7V8H11L14.5 4.5L16 6V12Z"
      fill="white"
      transform="translate(3,3) scale(0.7)"
    />
  </svg>
);

export const TeacherIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 18V20H4V18H20ZM12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 14C16.42 14 20 15.79 20 18H4C4 15.79 7.58 14 12 14Z" />
  </svg>
);



export const IconRenderer = ({ type, className }) => {
  switch (type) {
    case "instruction":
      return <InstructionIcon className={className} />;
    case "teachers":
      return <TeacherIcon className={className} />;
    case "community":
      return <CommunityIcon className={className} />;
    case "certificate":
      return <CertificateIcon className={className} />;
    default:
      return <InstructionIcon className={className} />;
  }
};
