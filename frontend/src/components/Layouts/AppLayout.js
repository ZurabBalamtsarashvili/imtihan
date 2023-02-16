import Sidebar from '@/components/Layouts/Sidebar';
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

            {/* Page Content */}
            <main className="flex">
                <Sidebar user={user} />
                <div className="container mx-auto">{children}</div>
            </main>

            {/* Mobile Menu */}
            <MobileBar />

            <Toaster position="top-right" />
        </>
    );
}
