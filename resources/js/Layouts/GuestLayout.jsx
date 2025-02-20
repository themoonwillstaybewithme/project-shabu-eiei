import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
                {/* Background ใช้ fixed เพื่อไม่ขยับ */}
                <div className="fixed inset-0 -z-10">
                    <img
                        id="background"
                        className="w-full h-full object-cover"
                        src="logreg.jpg"
                        alt="Background"
                    />
                </div>
        
                {/* กล่องเนื้อหา */}
                <div className="relative mb-28 z-10 flex flex-col items-center">
                    <ApplicationLogo className="w-auto max-h-[20px]" />
        
                {/* ทำให้โปร่งใส bg-opacity */}
                <div className="mt-6 w-full max-w-md bg-white px-6 py-4 shadow-md sm:rounded-lg bg-opacity-75">
                        {children}
                </div>
        
                <div className="flex items-center justify-center mt-6">
                    <Link href="/" className="button-or">
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}

