import {BriefcaseIcon, HomeIcon, LanguageIcon} from "@heroicons/react/24/outline";

const config = {
    admin: [
        {
            name: 'Home',
            icon: <HomeIcon className="inline-block w-6 h-6"/>,
            path: "/admin/dashboard"
        },
        {
            name: 'Companies',
            icon: <BriefcaseIcon className="inline-block w-6 h-6"/>,
            path: "/admin/company"
        },
        {
            name: 'Languages',
            icon: <LanguageIcon className="inline-block w-6 h-6"/>,
            path: "/admin/language"
        },
    ],
    manager: [],
    teacher: [],
    student: [],

};

export default config;
