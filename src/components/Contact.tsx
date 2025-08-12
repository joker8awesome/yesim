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
          <a href="tel:010-1234-5678" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center btn-interactive">📞 전화 상담</a>
          <Link href="https://pf.kakao.com/_your_channel" target="_blank" className="text-white bg-secondary hover:opacity-90 px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center btn-interactive">💬 카카오톡 상담</Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 items-start">
          <div className="w-full rounded-lg shadow bg-white p-4 sm:p-5">
            <div className="w-full max-w-2xl mx-auto">
              <label className="block text-xs text-foreground-accent mb-2 text-center">네이버 지도 검색</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  readOnly
                  value="예심요양원"
                  className="flex-1 border rounded-md px-3 py-2 bg-hero-background text-foreground cursor-default text-center"
                />
                <div className="flex gap-2 sm:min-w-[160px]">
                  <Link href="https://map.naver.com/v5/search/%EC%98%88%EC%8B%AC%EC%9A%94%EC%96%91%EC%9B%90" target="_blank" className="text-white bg-secondary hover:opacity-90 px-4 py-2 rounded-md text-center w-full btn-interactive">네이버에서 검색</Link>
                </div>
              </div>
              <p className="mt-1 text-[11px] text-foreground-accent text-center">일부 환경에서는 지도가 iframe으로 표시되지 않을 수 있어 직접 열기 방식을 제공합니다.</p>
            </div>
          </div>
          <div className="text-foreground-accent mt-2 text-center">
            <h3 className="text-xl font-semibold text-foreground">주소 및 안내</h3>
            <p className="mt-2">울산광역시 중구 구교6길 6, 201호(반구동 이주아트빌)</p>
            <p className="mt-1">주차: 건물 내(또는 인근 공용 주차장) 이용 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


