import { useForm } from "react-hook-form";

export default function newPost() {

  const {register,handleSubmit}= useForm();

  async function showPost(d) {
      alert(JSON.stringify(d))
   }

  async function savePost(post) { 

    const response = await fetch('http://localhost/api/insgetPost',{
      method: 'POST',
      body: JSON.stringify(post)
      });
      console.log(post)
      return await response.json()
    }

  return (
    <form onSubmit={ handleSubmit(savePost) }>
      <input {...register("title")} />
      <input type="number" {...register("authorId")} />
      <input type="submit" value="Submit" />
    </form>
  )
}
