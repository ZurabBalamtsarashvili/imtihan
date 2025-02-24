import Sidebar from '@/layouts/Sidebar';
import { useAuth } from '@/hooks/auth';
import Header from '@/components/Header';
import MobileBar from '@/components/MobileBar';
import { Toaster } from 'react-hot-toast';

export default function AppLayout({ name, children }) {
    const { user } = useAuth({ middleware: 'auth' });

    return (
        <>
            {/* Page Heading */}
            <Header name={name} />

            <main className="flex bg-white dark:bg-black">
                {/* Page Sidebar */}
                <Sidebar user={user} />

                {/* Page Content */}
                <div className="container mx-auto h-screen">{children}</div>
            </main>

            {/* Mobile Menu */}
            <MobileBar />

            <Toaster position="top-right" />
        </>
    );
}
