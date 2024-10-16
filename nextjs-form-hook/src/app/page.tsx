"use client";

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import InputBox from '@/components/input-box';
import SelectBox from '@/components/select-box';
import LoadingButton from '@/components/loading-button';

const ageRangeOptions = [
  { value: '18-25', label: '18-25' },
  { value: '26-35', label: '26-35' },
  { value: '36-45', label: '36-45' },
  { value: '46-60', label: '46-60' },
  { value: '60+', label: '60+' }
];

const genderOptions = [
  { value: 'MALE', label: 'Masculino' },
  { value: 'FEMALE', label: 'Feminino' },
  { value: 'OTHER', label: 'Outro' }
];


const schema = z.object({
  firstName: z.string().min(1, "Nome é obrigatório"),
  lastName: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Insira um e-mail válido").min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
  ageRange: z.enum(['18-25', '26-35', '36-45', '46-60', '60+'], {
    errorMap: () => ({ message: "Deve selecionar uma faixa etária válida" })
  }),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'], {
    errorMap: () => ({ message: "Deve selecionar um gênero válido" })
  })
});


type FormFields = z.infer<typeof schema>

export default function Home() {
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  
  const {handleSubmit, formState: { isSubmitting }, setError } = form

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);  
    } catch (error) {
      setError("root", {
        message: "Esse e-mail já esta cadastrado", //pode pegar erro da API
      });
    } 
  };

  return (
    <div className="flex w-full justify-center py-20">
      <FormProvider {...form} >
        <form className="flex flex-row flex-wrap w-1/4 gap-x-1 gap-y-2 justify-between" onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-row gap-x-2'>

            <InputBox
              type="text"
              placeholder="Seu primeiro nome"
              label='Primeiro Nome'
              name="firstName"
            />

            <InputBox
              type="text"
              placeholder="Seu último nome"
              label='Último Nome'
              name='lastName'
            />

          </div>
        

          <InputBox
            type="text"
            placeholder="Seu E-mail"
            label='E-mail'
            name='email'
          />

          <div className='flex flex-row gap-x-2'>
            <SelectBox options={ageRangeOptions} placeholder='Selecione sua faixa etária' label='Idade' name='ageRange'/>

            <SelectBox options={genderOptions} placeholder='Selecio seu gênero' label='Gênero' name='gender'/>
          </div>

          <InputBox
            type="password"
            placeholder="Crie uma senha"
            label='Senha'
            name='password'
          />

          <LoadingButton isSubmitting={isSubmitting} type='submit' text='Finalizar cadastro' loadingText='Finalizando...' />

        </form>
      </FormProvider>
    </div>
  );
}