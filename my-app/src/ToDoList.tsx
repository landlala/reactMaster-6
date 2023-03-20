import {useForm} from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register, handleSubmit, setValue
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  
  return (
    <div>
      <form onSubmit = {handleSubmit(handleValid)}>
        <input 
          {...register("toDo", {
            required: "please write a todo"
          })} 
          placeholder = "write a todo" 
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;