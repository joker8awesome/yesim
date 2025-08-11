import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    mobile?: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "어르신이 편안하고 안전한 하루를 보내실 수 있도록 가족 같은 돌봄을 약속드립니다.",
    quickLinks: [
        { text: "소개", url: "#hero" },
        { text: "문의/오시는길", url: "#contact" },
        { text: "Q&A", url: "#faq" }
    ],
    email: 'jmr-pc@hanmail.net',
    mobile: '010-7650-8291',
    telephone: '052-260-3191',
    socials: {
        kakaotalk: 'https://pf.kakao.com/_your_channel',
        naverblog: 'https://blog.naver.com/your_blog',
        instagram: 'https://www.instagram.com/yourcarehome',
    }
}