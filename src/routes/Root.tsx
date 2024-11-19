import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";

interface Inputs {
  setNumber: number;
}

const Root: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    navigate(`/inventory/${data.setNumber}`);

  return (
    <>
      <h1>Root page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("setNumber", { required: true })}
          placeholder={"Type set number..."}
        />
        {errors.setNumber && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <Outlet />
    </>
  );
};

export default Root;
