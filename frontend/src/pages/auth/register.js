import ApplicationLogo from '@/components/ApplicationLogo';
import AuthCard from '@/components/AuthCard';
import Button from '@/components/Button';
import GuestLayout from '@/layouts/GuestLayout';
import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin/dashboard',
    });

    const [isRevealPassword, setIsRevealPassword] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    const submitForm = event => {
        event.preventDefault();

        register({
            full_name: fullName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });
    };

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo width={144} height={32} />
                        </a>
                    </Link>
                }>

                <div className="flex flex-col">
                    <p className="my-4 text-center text-sm">
                        Sign up to imtihan to continue.
                    </p>

                    <Link href="">
                        <a className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-full text-lg px-5 py-2.5 text-center inline-flex items-center mb-2">
                            <svg
                                className="mr-2 -ml-1 w-4 h-4"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook-f"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path
                                    fill="currentColor"
                                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z" />
                            </svg>
                            Sign up with Facebook
                        </a>
                    </Link>

                    <Link href="">
                        <a className="text-black border hover:border-brand dark:bg-[#fff] dark:hover:bg-[#e5e7eb]/90 font-medium rounded-full text-lg px-5 py-2.5 text-center inline-flex items-center mb-2">
                            <svg
                                className="mr-2 -ml-1 w-4 h-4"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512">
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                            Sign up with Google
                        </a>
                    </Link>

                    <Link href="">
                        <a className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-full text-lg px-5 py-2.5 text-center inline-flex items-center mb-2">
                            <svg
                                className="mr-2 -ml-1 w-5 h-5"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="apple"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path
                                    fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            Sign up with Apple
                        </a>
                    </Link>
                </div>

                <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 h-px bg-zinc-200 border-0 dark:bg-zinc-700 w-full" />
                    <span className="absolute left-1/2 px-3 font-medium text-zinc-900 -translate-x-1/2 bg-white dark:text-white dark:bg-black">
                        or
                    </span>
                </div>

                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Input
                            id="full_name"
                            type="text"
                            value={fullName}
                            className="block mt-1 w-full"
                            placeholder="Full Name"
                            onChange={event => setFullName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Input
                            id="password"
                            type={isRevealPassword ? "text" : "password"}
                            value={password}
                            className="block mt-1 w-full pr-10"
                            placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <div className="relative">
                            <span className="absolute -top-9 right-0 flex pr-2 text-zinc-900 dark:text-zinc-300" onClick={() => setIsRevealPassword(prevState => !prevState)}>
                                {isRevealPassword ? <EyeSlashIcon className="w-6 h-6"/> : <EyeIcon className="w-6 h-6"/>}
                            </span>
                        </div>

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Input
                            id="passwordConfirmation"
                            type={isRevealPassword ? "text" : "password"}
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            placeholder="Confirm Password"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/auth/login">
                            <a className="underline text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-500">
                                Already registered?
                            </a>
                        </Link>

                        <Button className="ml-4">Sign up</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    );
};

export default Register;
