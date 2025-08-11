"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// App 스토어 버튼은 요양원 랜딩에서는 사용하지 않으므로 제거

import { heroDetails, heroSlides } from '@/data/hero';

const Hero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!heroSlides || heroSlides.length === 0) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto sb-aggro-b whitespace-pre-line">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto whitespace-pre-line">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <Link href="#contact" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors text-lg">문의하기</Link>
                    <Link href="#faq" className="text-white bg-secondary hover:opacity-90 px-8 py-3 rounded-full transition-colors text-lg">자주묻는질문</Link>
                </div>
                {/* 슬라이드 배너 */}
                {heroSlides && heroSlides.length > 0 ? (
                    <div className='relative mt-12 md:mt-16 mx-auto z-10 w-full max-w-4xl aspect-[16/9] overflow-hidden rounded-2xl shadow-lg'>
                        {heroSlides.map((slide, idx) => (
                            <Image
                                key={slide.src}
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 768px"
                                priority={idx === activeIndex}
                                className={`object-cover transition-opacity duration-700 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                                unoptimized
                            />
                        ))}
                        {heroSlides[activeIndex]?.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-2 text-sm md:text-base">
                                {heroSlides[activeIndex].caption}
                            </div>
                        )}
                    </div>
                ) : (
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className='relative mt-12 md:mt-16 mx-auto z-10'
                    />
                )}
            </div>
        </section>
    );
};

export default Hero;
