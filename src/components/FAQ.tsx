"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="relative">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_70%_0%,rgba(48,79,255,0.08),transparent),radial-gradient(40rem_20rem_at_0%_100%,rgba(254,216,53,0.12),transparent)]" />
                <div className="rounded-3xl border bg-white/70 backdrop-blur p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                    <p className="hidden lg:block text-foreground-accent">FAQ</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left sb-aggro-b">자주 묻는 질문</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        무엇이든 편하게 문의하세요.
                    </p>
                    <div className="mt-4 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3">
                        <a href="tel:010-1234-5678" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center">📞 전화 상담</a>
                        <a href="https://pf.kakao.com/_your_channel" target="_blank" className="text-white bg-secondary hover:opacity-90 px-8 py-3 rounded-full transition-colors text-lg w-full sm:w-auto text-center">💬 카카오톡 상담</a>
                    </div>
                </div>

                <div className="lg:col-span-2 w-full mx-auto">
                    {faqs.map((faq, index) => (
                  <div key={index} className="mb-4 rounded-xl border bg-white p-4 shadow-sm card-interactive">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full text-lg text-left">
                                            <span className="text-xl md:text-2xl font-semibold pr-3">{faq.question}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="pt-3 text-foreground-accent whitespace-pre-line">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default FAQ;