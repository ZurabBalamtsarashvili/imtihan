import Modal from '@/components/Modal';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';
import Label from '@/components/Label';
import Input from '@/components/Input';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from '@/store';
import { postLanguage } from '@/store/slices/language';
import toast from 'react-hot-toast';

const LanguageCreateSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    code: Yup.string().required('Required'),
    is_active: Yup.boolean(),
});

export default function CreateModal({ open, setIsOpen }) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(LanguageCreateSchema) });

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(postLanguage(data))
            .then(() => {
                toast.success('Created successfully!');
                setIsOpen(false);
            })
            .catch(err => {
                toast.error(err?.response?.data?.message);
                console.log('err');
            });
    };

    return (
        <>
            {open && (
                <Modal title="Create" isOpen={open} setIsOpen={setIsOpen}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center justify-between my-4">
                            <div className="mt-3">
                                <label className="inline-flex items-center">
                                    <Toggle
                                        type="checkbox"
                                        {...register('is_active')}
                                        defaultValue={1}
                                    />

                                    <span className="ml-2 text-sm text-zinc-600">
                                        Checked for active
                                    </span>
                                </label>
                            </div>
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
                                <Label>Code</Label>

                                <Input
                                    {...register('code')}
                                    type="text"
                                    className="block mt-1 w-full"
                                />
                                {errors.code?.message && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.code.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
}
