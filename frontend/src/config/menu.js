import {
    BookmarkIcon,
    BriefcaseIcon,
    HomeIcon,
    LanguageIcon, UserIcon,
} from '@heroicons/react/24/outline';

const config = {
    desktop: {
        admin: [
            {
                name: 'Home',
                icon: <HomeIcon className="inline-block w-6 h-6" />,
                path: '/admin/dashboard',
            },
            {
                name: 'Companies',
                icon: <BriefcaseIcon className="inline-block w-6 h-6" />,
                path: '/admin/company',
            },
            {
                name: 'Languages',
                icon: <LanguageIcon className="inline-block w-6 h-6" />,
                path: '/admin/language',
            },
            {
                name: 'Announcements',
                icon: <BookmarkIcon className="inline-block w-6 h-6" />,
                path: '/admin/announcement',
            },
            {
                name: 'Account',
                icon: <UserIcon className="inline-block w-6 h-6" />,
                path: '/admin/account',
            }
        ],
        manager: [],
        teacher: [],
        student: [],
    },
    mobile: {
        admin: [
            {
                name: 'Home',
                icon: <HomeIcon className="inline-block w-7 h-7" />,
                path: '/admin/dashboard',
            },
            {
                name: 'Companies',
                icon: <BriefcaseIcon className="inline-block w-7 h-7" />,
                path: '/admin/company',
            },
            {
                name: 'Languages',
                icon: <LanguageIcon className="inline-block w-7 h-7" />,
                path: '/admin/language',
            },
            {
                name: 'Announcements',
                icon: <BookmarkIcon className="inline-block w-7 h-7" />,
                path: '/admin/announcement',
            },
            {
                name: 'Account',
                icon: <UserIcon className="inline-block w-7 h-7" />,
                path: '/admin/account',
            }
        ],
        manager: [],
        teacher: [],
        student: [],
    }
};

export default config;
