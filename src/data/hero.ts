export const heroDetails = {
    heading: '따뜻하고 안전한 요양\n오늘도 안심하세요',
    subheading: '가족 같은 돌봄과 쾌적한 생활 환경으로\n어르신의 행복한 하루를 만들어 갑니다',
    description: '저희 요양원은 24시간 전문 케어로 어르신의 편안한 생활을 돕습니다.\n전화 또는 카카오톡으로 편하게 상담해주세요.',
    centerImageSrc: '/images/hero-mockup.webp',
};

// 슬라이드형 히어로 배너를 위한 이미지 목록 (추후 실제 사진으로 교체하세요)
export const heroSlides: Array<{
    src: string;
    alt: string;
    caption?: string;
}> = [
    { src: '/images/hero-mockup.webp', alt: '요양원 전경 사진', caption: '따뜻한 돌봄, 행복한 하루' },
    { src: '/images/hero-transactions.webp', alt: '밝고 청결한 실내 전경' },
    { src: '/images/hero-chart.webp', alt: '어르신 활동 사진' },
    { src: '/images/mockup-1.webp', alt: '직원의 세심한 케어 장면' },
    { src: '/images/mockup-2.webp', alt: '행사/이벤트 사진' },
];