import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="background-welcome">
            <Head title="Welcome" />
            <div className=" text-black-50 dark:bg-black dark:text-white/50 max-h-screen">
                <img
                    id="background"
                    className="absolute top-0 background-image"
                    src="banner2.png"
                />
                <div className="relative flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 pt-9 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                            
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="button-or"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="button-or ms-2"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main>
                            <div className="card flex flex-col items-center me-8 mb-32">
                                <img
                                    className="w-auto max-h-[250px] justify-self-center"
                                    src="Logo.png"
                                />
                                <label lang="th" className='mt-6 text-head'>
                                    SHA BU JI
                                </label>
                                <label lang="th" className='mt-2 text-center text-sub'>
                                    สัมผัสประสบการณ์ชาบูร้อนๆ น้ำซุปเข้มข้น วัตถุดิบสดใหม่จากธรรมชาติ ในบรรยากาศอบอุ่นและบริการที่ใส่ใจ ที่ร้านของเรา ทุกคำคือความอร่อยที่คุณไม่ควรพลาด!
                                </label>
                            </div>
                        </main>

                        <div className="flex flex-col items-center me-8">
                            <footer lang="th" className="py-16 text-center card-contract rounded-xl">
                                 มหาวิทยาลัยแม่โจ้
                                เลขที่ 63/4 หมู่ 4 ถนนเชียงใหม่-พร้าว ตำบลหนองหาร อำเภอสันทราย จังหวัดเชียงใหม่ 50290
                                
                            </footer>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
