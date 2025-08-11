"use client";

import Link from "next/link";

const FloatingNav: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-6 md:right-6 z-50 flex flex-col gap-3 items-end">
      <Link
        href="#contact"
        aria-label="문의하기"
        className="px-5 py-3 rounded-full text-black bg-primary hover:bg-primary-accent shadow-lg btn-interactive text-base md:text-lg"
      >
        문의하기
      </Link>
      <Link
        href="#contact"
        aria-label="오시는길"
        className="px-5 py-3 rounded-full text-white bg-secondary hover:opacity-90 shadow-lg btn-interactive text-base md:text-lg"
      >
        오시는길
      </Link>
      <Link
        href="#faq"
        aria-label="자주묻는질문"
        className="px-5 py-3 rounded-full text-white bg-foreground hover:opacity-90 shadow-lg btn-interactive text-base md:text-lg"
      >
        자주묻는질문
      </Link>
    </div>
  );
};

export default FloatingNav;


