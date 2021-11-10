import  prisma  from "../../lib/prisma";
import { getSession,useSession} from "next-auth/react";
import { useForm } from "react-hook-form";


export default function newPost({user}) {

  if (user.isAuthor || user.isAdmin) {

  const {register,handleSubmit}= useForm();
  async function savePost(d) { 
    const authorId = user.id
    const post = {...d,authorId}
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
      <input type="submit" value="Submit" />
    </form>
  )
  }
  else
    {return(<div><h1>not authorized</h1> </div>)}
}

export async function getServerSideProps(context) {
 
  const session = await getSession(context);
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      isAuthor: true,
      isAdmin: true
    },
    where: {
            email: session.user.email,
          }
  });
  
  return {
    props: {
      user,
    },
  }
}
