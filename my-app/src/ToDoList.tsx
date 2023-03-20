import {useState} from "react";
import {useForm} from "react-hook-form";

/*
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value}
    } = event;
    setToDo(value);  
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit = {onSubmit}>
        <input onChange = {onChange} value = {toDo} placeholder = "write a to do" />
        <button>add</button>
      </form>
    </div>
  );
}
*/

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

function ToDoList() {
  const {register, watch, handleSubmit, formState: {errors}} = useForm<IForm>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form style = {{display: "flex", flexDirection: "column"}} onSubmit = {handleSubmit(onValid)}>
        <input 
          {...register("email", {
            required: "email is required", 
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver"
            }
          })} 
          placeholder = "email" 
        />
        <span>
          {errors?.email?.message}
        </span>
        <input {...register("firstName", {required: "firstName required" , minLength: 10})} placeholder = "first name" />
        <span>
          {errors?.firstName?.message}
        </span>
        <input {...register("lastName", {required: "lastName required"})} placeholder = "last name" />
        <span>
          {errors?.lastName?.message}
        </span>
        <input {...register("password", {required: "password required"})} placeholder = "password" />
        <span>
          {errors?.password?.message}
        </span>
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;