import Head from "next/head";
import ApplicationLogo from "@/components/ApplicationLogo";
import NavLink from "@/components/NavLink";
import Footer from "@/layouts/Footer";
import {CalendarIcon, CheckIcon, CreditCardIcon, MicrophoneIcon, VideoCameraIcon} from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import HomeImage from '../../public/home.webp';

export default function Home() {
    return (
        <>
            <Head>
                <title>About - İmtihan</title>
                <meta name="description" content="Generated by codenteq" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="fixed w-full backdrop-blur-sm border-b border-zinc-100 px-2 sm:px-4 py-2.5 dark:bg-black/30 dark:border-zinc-900 z-10">
                <div className="text-center sm:block md:blcok lg:blcok xl:blcok 2xl:blcok block">
                    <ApplicationLogo width={144} height={32}/>
                </div>
            </header>

            <main className="px-4 py-16 bg-white dark:bg-black w-full">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <div className="text-center pt-16">
                            <h2 className="text-3xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50">
                                Sınavlarınız, online kurslarınız, görüşmeleriniz ve sınıfınız, hepsi bir arada
                            </h2>
                        </div>

                        <div className="text-center mx-auto max-w-3xl pt-8">
                            <p className="text-xl lg:text-2xl text-zinc-900 dark:text-zinc-100">
                                İmtihan, işinizi yürütmeniz ve sınıfınızı daha özgün bir şekilde büyütmeniz için gerekli araçları sağlar. Hem de ücretsiz!
                            </p>
                        </div>

                        <div className="text-center pt-16">
                            <NavLink
                                name="Ücretsiz kaydolun"
                                href="https://open.imtihan.tech/auth/register"
                                className="p-4 px-10 text-xl"
                            />
                        </div>

                        <div className="pt-16">
                            <Image src={HomeImage} placeholder="blur" />
                        </div>
                    </div>

                    <div>
                        <div className="lg:flex pt-16">
                            <div className="pt-16">
                                <h2 className="text-5xl text-center lg:text-left font-extrabold text-zinc-900 dark:text-zinc-50">
                                    Tüm seçenekleri tek bir yerde sunmanın en kolay yolu
                                </h2>
                            </div>

                            <div className="max-w-lg mx-auto pt-16">
                                <p className="text-xl lg:text-2xl text-center lg:text-left text-zinc-900 dark:text-zinc-100">
                                    Deneme sınavları ayarlayın, kurslar oluşturup yönetin, etkinlikler gerçekleştirin. Sınıfınızı yönetin ve içeriğiniz için sınavlar sunun.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 mb-14 md:mb-16 pt-16">

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-[210px] rounded-lg overflow-hidden min-h-[284px]">
                                <picture>
                                    <img src="/class-exam.webp"
                                         className="mb-4 md:mb-8 md:h-[200px] md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:mr-[-178px] xl:max-w-none"
                                         alt="İmtihan"
                                    />
                                </picture>
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                        Etkileyici sınıf sınavları
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Sınıfınızı yönetin ve içeriğiniz için sınavlar sunun. Sınıfınızı yönetin ve
                                        içeriğiniz için sınavlar sunun. Değerlendirme araçlarımız ile öğrencilerinizi
                                        daha iyi anlayın ve sınıfınızı daha özgün bir şekilde büyütün. Sınavlarını ve
                                        denemeleriniz için en kolay ve en ilgi çekici platform.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-[210px] rounded-lg overflow-hidden min-h-[284px]">
                                <img src="/online-course.webp"
                                     className="mb-4 md:mb-8 md:h-[200px] md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:mr-[-178px] xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                        Online kurslar oluşturun ve yönetin
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Kurs oluşturmak ve yönetmek için en kolay ve en ilgi çekici platform.
                                        Kursumuzu oluşturun, öğrencilerinize kayıt olmalarını sağlayın ve onları sınavlara alın.
                                        Öğretmenler için en iyi analiz yöntemi. Onları sınıfınızın en iyi öğrencileri yapın.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-[210px] rounded-lg overflow-hidden min-h-[284px]">
                                <img src="/analytics.webp"
                                     className="mb-4 md:mb-8 md:h-[200px] md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:mr-[-178px] xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                        Kendizi deneyin
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Deneme sınavları ayarlayın, etkinliklere ve sınıf sınavlarına katılın.
                                        Kendinizi test edin ve sınıfınızın en iyi öğrencileri olun. Sonuçlarınızı görün
                                        ve paylaşın, sınıfınızı daha özgün bir şekilde büyütün.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center relative py-7 px-6 xl:py-10 xl:pr-10 xl:pl-[210px] rounded-lg overflow-hidden min-h-[284px]">
                                <img src="/events.webp"
                                     className="mb-4 md:mb-8 md:h-[200px] md:object-contain xl:h-auto xl:mb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-full xl:mr-[-178px] xl:max-w-none" alt="İmtihan" />
                                <div className="flex flex-col gap-2 text-sm md:text-base">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                                        Etkinlikler
                                    </h5>

                                    <p className="mb-3 font-normal">
                                        Gerçek sınavlara hazırlanmak için etkinlikler oluşturun. Sınıfınızı yönetin ve içeriğiniz için sınavlar sunun.
                                        Dersleriniz için pratik etkinlikler oluşturun ve bunu planlayın. Biz size gereken her şeyi sağlayacağız.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="mb-14 md:mb-16 flex flex-col gap-5 md:gap-6 items-center justify-center text-center pt-16">
                            <h2 className="text-[42px] md:text-[48px] text-zinc-900 dark:text-zinc-50">
                                <span className="hidden md:inline">İmtihan </span>
                                <span>Entegrasyonlar</span>
                            </h2>

                            <p className="text-lg md:text-2xl max-w-[776px] mx-auto text-zinc-900 dark:text-zinc-50">
                                İmtihan'ın özel entegrasyonları, ihtiyacınız olan her şeyi sağlayacak ve
                                üretkenliğinizi artırmanıza yardımcı olacaktır.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="inline-grid grid-cols-2 place-content-center gap-x-4 gap-y-10 md:gap-14 lg:w-full md:grid-cols-4 lg:gap-8">
                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] border border-neutral-200 rounded-2xl">
                                        <CreditCardIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3 className="h5">Iyzico</h3>
                                </div>

                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] border border-neutral-200 rounded-2xl">
                                        <VideoCameraIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3 className="h5">Zoom</h3>
                                </div>

                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] border border-neutral-200 rounded-2xl">
                                        <MicrophoneIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3 className="h5">Discord</h3>
                                </div>

                                <div className="inline-flex flex-col items-center justify-center text-center gap-5 md:gap-6">
                                    <div
                                        className="inline-flex items-center justify-center w-[120px] h-[120px] lg:w-[168px] lg:h-[168px] border border-neutral-200 rounded-2xl">
                                        <CalendarIcon className="w-14 h-14 lg:w-22 lg:h-22" />
                                    </div>

                                    <h3 className="h5 whitespace-nowrap">Google Takvim</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-[36px] md:mb-16 pt-16">
                            <h2 className="mb-5 lg:mb-6 text-[48px] leading-none text-center">Basit bir fiyatlandırma</h2>

                            <p className="flex flex-col items-center justify-center gap-3 mb-[36px] lg:mb-10 md:flex-row md:gap-14">
                            <span className="inline-flex items-center flex-nowrap whitespace-nowrap">
                                <CheckIcon className="w-6 h-6 text-orange-500 mr-4" />
                                <span className="text-2xl font-semibold">Aylık ücret yok.</span>
                            </span>

                                <span className="inline-flex items-center flex-nowrap whitespace-nowrap">
                                <CheckIcon className="w-6 h-6 text-orange-500 mr-4" />
                                <span className="text-2xl font-semibold">Gizli masraflar yok.</span>
                            </span>
                            </p>

                            <p className="text-xl text-center max-w-[864px] mx-auto">
                                Ödemelerinizde uygulanan platform
                                ücretleri haricinde biz sadece siz kazandıkça kazanıyoruz. Herhangi bir depolama ücreti,
                                aylık ücret, kademeli plan ve sınır yok.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-10">
                            <div className="lg:col-span-4 flex flex-col items-center text-center rounded-2xl md:rounded-3xl bg-yellow-50 text-neutral-900 py-[42px] px-6">
                                <h3 className="mb-5 lg:mb-6 text-2xl lg:text-[28px] font-medium">Sınavlar</h3>
                                <p className="flex items-center gap-4 mb-5 lg:mb-7 text-[49px] lg:text-[56px]">
                                    <span className="text-yellow-700 opacity-[.32] line-through">%10 </span>
                                    <span className="font-semibold">%0</span>
                                </p>

                                <p className="mt-auto font-medium lg:text-lg">
                                    Sadece öğrenciler için ücretsiz
                                </p>
                            </div>

                            <div className="lg:col-span-6 flex flex-col items-center text-center rounded-2xl md:rounded-3xl bg-neutral-900 text-white py-[42px] px-6">
                                <h3 className="mb-5 lg:mb-6 text-2xl lg:text-[28px] font-medium text-white">
                                    Kurslar, sınıflar ve eğitimler
                                </h3>
                                <p className="flex items-center gap-4 mb-5 text-[49px] lg:text-[56px]">
                                    <span className="font-semibold">%10</span>
                                </p>
                                <p className="mt-auto font-medium lg:text-lg">
                                    Artı kredi kartı işlem ücretleri
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="pt-16">
                            <div className="inner-container">
                                <h2 className="mb-10 md:mb-16 text-5xl lg:text-[80px] leading-none text-center">İmtihan olun</h2>
                                <form className="flex flex-col gap-4 items-center justify-center max-w-2xl mx-auto md:flex-row">
                                    <div className="relative w-full">
                                        <Input className="w-full h-16 text-2xl" type="email" placeholder="E-posta adresi" />
                                    </div>

                                    <Button type="submit" className="w-full h-16 text-2xl shrink-0 md:w-auto">Ücretsiz kaydolun</Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
