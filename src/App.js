import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="main-form">
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="John" />
      <input {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
      placeholder="Smith" className='form-input' />
      <select {...register("country")} className="form-input">
        <option value="USA">USA</option>
        <option value="italy">Italy</option>
        <option value="france">France</option>
      </select>
      <input type="submit" className='form-input' />
    </form>
  );
}
