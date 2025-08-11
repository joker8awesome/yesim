import Link from 'next/link';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="bg-hero-background p-6 md:p-10 rounded-xl">
        <SectionTitle>
          <h2 className="my-3 !leading-snug text-center sb-aggro-b">문의 및 오시는 길</h2>
        </SectionTitle>
        <p className="text-foreground-accent text-center max-w-2xl mx-auto whitespace-pre-line">
          {`저희 예심요양원은 24시간 전문 케어로 어르신의 편안한 생활을 돕습니다.\n전화 또는 카카오톡으로 편하게 상담해주세요.`}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:010-1234-5678" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center">📞 전화 상담</a>
          <Link href="https://pf.kakao.com/_your_channel" target="_blank" className="text-white bg-secondary hover:opacity-90 px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center">💬 카카오톡 상담</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow">
            <iframe title="네이버 지도" src="https://map.naver.com/v5/search/%EC%98%88%EC%8B%AC%EC%9A%94%EC%96%91%EC%9B%90" className="w-full h-full border-0" allowFullScreen />
          </div>
          <div className="text-foreground-accent">
            <h3 className="text-xl font-semibold text-foreground">주소 및 안내</h3>
            <p className="mt-2">울산광역시 중구 구교6길 6, 201호(반구동 이주아트빌)</p>
            <p className="mt-1">주차: 건물 내(또는 인근 공용 주차장) 이용 가능</p>
            <a href="https://map.naver.com/v5/search/%EC%98%88%EC%8B%AC%EC%9A%94%EC%96%91%EC%9B%90" target="_blank" className="mt-4 inline-block text-secondary hover:underline">네이버 길찾기 바로가기 →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


