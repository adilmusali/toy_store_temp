import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { schema } from "../schema/schema";
import axios from "axios";

const AddValue = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postData = async() => {
    const values = getValues()
    await axios.post("http://localhost:8080/toys",{
        image: values.image,
        name: values.name,
        price: values.price
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(postData)}>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="text" {...register('image')}/>
          {errors.image?.message && <p className="text-red-500">{errors.image?.message}</p>}
          <FormLabel>Name</FormLabel>
          <Input type="text" {...register('name')}/>
          {errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
          <FormLabel>Price</FormLabel>
          <Input type="number" {...register('price')}/>
          {errors.price?.message && <p className="text-red-500">{errors.price?.message}</p>}
          <Button colorScheme="teal" size="lg" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default AddValue;
