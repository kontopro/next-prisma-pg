import { useForm } from "react-hook-form";

export default function newPost() {

  const {register,handleSubmit}= useForm();

  async function savePost(post) { 

    const response = await fetch('/api/insgetPost',{
      method: 'POST',
      body: JSON.stringify(post)
      });
      console.log(post)
      return await response.json()
    }

  return (
    <form onSubmit={ handleSubmit(savePost) }>
      <input {...register("title")} />
      <input {...register("authorId")} />
      <input type="submit" value="Submit" />
    </form>
  )
}
