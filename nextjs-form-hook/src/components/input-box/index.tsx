import { Controller, FieldError, useFormContext} from 'react-hook-form';

interface InputBoxProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

const InputBox: React.FC<InputBoxProps> = ({ type, name, placeholder, label }) => {
    const {control, formState: { errors } } = useFormContext()
    const fieldError = errors[name] as FieldError | undefined
    console.log(fieldError)

    return (
    <Controller control={control} name={name} render={({field}) => (<div className="w-full">
        <label className='text-sm mb-1 text-gray-800'>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            {...field}  // Aplicando o "register" do react-hook-form
            className="border-2 rounded-md border-black w-full h-[40px] px-2"
        />
        {fieldError && <div className="text-sm text-red-500">{fieldError.message}</div>}
    </div>)}/>
  );
};

export default InputBox;