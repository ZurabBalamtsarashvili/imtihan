import { useAuth } from '@/hooks/auth';

export default function Avatar({ className }) {
    const { user } = useAuth();

    const userSplit = user?.full_name
        .split(' ')
        .map(name => name[0])
        .join('');

    return (
        <div
            className={`${className} sm:grid md:grid lg:grid xl:grid 2xl:grid grid justify-items-center my-4`}>
            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                    {userSplit}
                </span>
            </div>
            <span className="font-medium block text-lg my-2">
                {user?.full_name}
            </span>
        </div>
    );
}
