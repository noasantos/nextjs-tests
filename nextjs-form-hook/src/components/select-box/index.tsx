import { Controller, FieldError, useFormContext} from 'react-hook-form';

interface SelectBoxProps {
  options: { value: string, label: string }[];
  name: string;
  placeholder: string;
  label: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, name, placeholder, label }) => {

    const {control, formState: { errors } } = useFormContext()
    const fieldError = errors[name] as FieldError | undefined

    return (
        <Controller control={control} name={name} render={({field}) => (
            <div className="w-full"> 
                <label className='text-sm mb-1 text-gray-800'>{label}</label>
                <select
                    {...field}
                    defaultValue=""
                    className='border-2 rounded-md border-black h-[40px] w-full px-2 text-gray-400'
                >
                    <option value="" disabled hidden>{placeholder}</option>
                
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                {fieldError && <div className="text-sm text-red-500">{fieldError.message}</div>}
            </div>)
        }/>
        
    );
};
  
  export default SelectBox;