import AppLayout from '@/layouts/AppLayout';
import Head from 'next/head';
import BackButton from '@/components/BackButton';
import Input from '@/components/Input';
import Button from '@/components/Button';
import InputSelect from '@/components/InputSelect';
import InputFile from '@/components/InputFile';
import { useDispatch } from '@/store';
import { postCompany } from '@/store/slices/company';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import Label from '@/components/Label';
import Toggle from '@/components/Toggle';

Create.getLayout = page => <AppLayout name="Create">{page}</AppLayout>;

const CompanyCreateSchema = Yup.object().shape({
    is_active: Yup.boolean(),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    logo: Yup.mixed().test('logo', 'You need to provide a file', value => {
        if (value.length > 0) {
            return true;
        }
        return false;
    }),
    phone: Yup.string().required('Required'),
    tax_id: Yup.number().required('Required'),
    subdomain: Yup.string().required('Required'),
    web_url: Yup.string().url('Invalid url').required('Required'),
    address: Yup.string().required('Required'),
    zip_code: Yup.string().required('Required'),
    country_id: Yup.number().required('Required'),
    city_id: Yup.number().required('Required'),
    state_id: Yup.number().required('Required'),
});

export default function Create() {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(CompanyCreateSchema) });

    const dispatch = useDispatch();
    const onSubmit = data => {
        const formData = new FormData();

        formData.append('logo', data.logo[0]);

        for (const key in data) {
            if (key !== 'logo') {
                formData.append(key, data[key]);
            }
        }

        dispatch(postCompany(formData))
            .then(res => {
                toast.success('Created successfully!');
                router.push('/admin/company');
            })
            .catch(err => {
                toast.error(err?.response?.data?.message);
                console.log('err');
            });
    };

    useEffect(() => {
        reset({ logo: undefined });
    }, []);

    return (
        <>
            <Head>
                <title>Create - İmtihan</title>
                <meta name="description" content="Generated by codenteq" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="px-4 pt-16">
                <BackButton href="/admin/company" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between my-4">
                        <div className="mt-3">
                            <label className="inline-flex items-center">
                                <Toggle
                                    type="checkbox"
                                    name="is_active"
                                    value="1"
                                />

                                <span className="ml-2 text-sm text-zinc-600">
                                    Checked for active
                                </span>
                            </label>
                        </div>
                        <Button type="submit">Save</Button>
                    </div>

                    <div className="mb-3">
                        <InputFile className="my-4">
                            <Input
                                {...register('logo')}
                                type="file"
                                className="hidden"
                                accept="image/*"
                            />
                        </InputFile>
                        {errors.logo?.message && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                {errors.logo.message}
                            </p>
                        )}
                    </div>

                    <div className="grid gap-4 mb-6 lg:grid-cols-2">
                        <div>
                            <Label>Name</Label>

                            <Input
                                {...register('name')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.name?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Email</Label>

                            <Input
                                {...register('email')}
                                type="email"
                                className="block mt-1 w-full"
                            />
                            {errors.email?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Phone</Label>

                            <Input
                                {...register('phone')}
                                type="tel"
                                className="block mt-1 w-full"
                            />
                            {errors.phone?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Tax id</Label>

                            <Input
                                {...register('tax_id')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.tax_id?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.tax_id.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Subdomain</Label>

                            <Input
                                {...register('subdomain')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.subdomain?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.subdomain.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Web url</Label>

                            <Input
                                {...register('web_url')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.web_url?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.web_url.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Address</Label>

                            <Input
                                {...register('address')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.address?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Zip code</Label>

                            <Input
                                {...register('zip_code')}
                                type="text"
                                className="block mt-1 w-full"
                            />
                            {errors.zip_code?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.zip_code.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Choose a country</Label>

                            <InputSelect
                                {...register('country_id')}
                                defaultOption="Choose a country">
                                <option value="1">Türkiye</option>
                            </InputSelect>
                            {errors.country_id?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.country_id.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Choose a city</Label>

                            <InputSelect
                                {...register('city_id')}
                                defaultOption="Choose a city">
                                <option value="1">Adana</option>
                            </InputSelect>
                            {errors.city_id?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.city_id.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Choose a state</Label>

                            <InputSelect
                                {...register('state_id')}
                                defaultOption="Choose a state">
                                <option value="1">Merkez</option>
                            </InputSelect>
                            {errors.state_id?.message && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.state_id.message}
                                </p>
                            )}
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}
