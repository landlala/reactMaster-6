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
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {register, watch, handleSubmit, formState: {errors}, setError} = useForm<IForm>({
    defaultValues: {
      email: "@naver.com"
    }
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError("password1", {message: "password not same"}, {shouldFocus: true});
    }
    // setError("extraError", {message: "offline"});
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
        <input
          {...register("lastName", {
            required: "lastName required",
            validate: (value) => !value.includes("nico") || "no nico"
          })}
          placeholder = "last name" 
        />
        <span>
          {errors?.lastName?.message}
        </span>
        <input {...register("password", {required: "password required"})} placeholder = "password" />
        <span>
          {errors?.password?.message}
        </span>
        <input {...register("password1", {required: "password1 required"})} placeholder = "password1" />
        <span>
          {errors?.password1?.message}
        </span>
        <button>add</button>
        <span>
          {errors?.extraError?.message}
        </span>
      </form>
    </div>
  );
}

export default ToDoList;