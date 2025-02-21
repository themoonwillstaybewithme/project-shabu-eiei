import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Shabuji" />
            <div>
                <div className='mt-8'>
                    <div className='card card-promotion'>
                        <h6 lang='th' className='haeder-card'>Promotion</h6>
                        
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='card card-recieves bg-white bg-opacity-80'>
                        <h6 lang='th' className='haeder-card'>จองโต๊ะ</h6>
                        <div class="grid grid-cols-4 gap-3 mt-5">
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                    <div><img className='w-auto h-auto'
                                    src="table_shabu.png"/></div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                                <div>
                                    <img className='w-auto h-auto'
                                    src="table_shabu.png"/>
                                </div>
                        </div>
                        <div className="flex flex-row w-full justify-center mb-4">
                                <div className='card-status'>
                                    <img className='w-auto h-[25px]'
                                    src="table_shabu.png"/>
                                    <label lang='th' className='text-sm'>ว่าง</label>
                                </div>
                                <div className='card-status'>
                                    <img className='w-auto h-[25px]'
                                    src="table_shabu.png"/>
                                    <label lang='th' className='text-sm'>จองแล้ว</label>
                                </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className='mt-8'>
                        <h6 lang='th' className='footer-contract'>
                            <div className='grid grid-cols-1 gap-3 my-3'>
                                <div>
                                    <label className='text-base'>ติดตามข่าวสารโปรโมชั่นดีๆ ได้ที่</label>
                                    <div className='flex flex-row justify-center mt-3'>
                                        <img className='w-auto h-[30px] cursor-pointer' src="square-facebook-brands.svg"/> 
                                        <img className='w-auto h-[26px] cursor-pointer ms-2 mt-0.5' src="line-brands.svg"/>
                                    </div>
                                </div>
                            </div>
                        </h6>
                    </div>
                </footer>
                
            </div>
        </AuthenticatedLayout>
    );
}
