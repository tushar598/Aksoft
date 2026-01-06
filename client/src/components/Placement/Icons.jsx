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

export const CommunityIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 11C16 9.34 14.66 8 13 8C11.34 8 10 9.34 10 11C10 12.66 11.34 14 13 14C14.66 14 16 12.66 16 11ZM8 11C8 9.34 6.66 8 5 8C3.34 8 2 9.34 2 11C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11ZM8 11V11.01M16 11V11.01M20.5 15.5C20.5 15.5 19 14.5 16.5 14.5C14 14.5 13.5 16 13.5 16V18H23.5V16C23.5 16 23 15.5 20.5 15.5ZM5.5 15.5C5.5 15.5 4 14.5 1.5 14.5C-1 14.5 -1.5 16 -1.5 16V18H10.5V16C10.5 16 10 15.5 7.5 15.5H5.5Z" />
  </svg>
);

export const CertificateIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 17L9 15L6 17V7H12V17ZM18 17H14V5H18V17Z" />
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
