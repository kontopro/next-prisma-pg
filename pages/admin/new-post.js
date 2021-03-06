import  prisma  from "../../lib/prisma";
import { getSession} from "next-auth/react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form.js"

export default function newPost({user}) {

  if (user.id && (user.isAuthor || user.isAdmin) ) {

    async function addPost(d) { 
      const authorId = user.id    
      const post = {...d,authorId}    
      const response = await fetch('/api/insgetPost',{
          method: 'POST',
          body: JSON.stringify(post)
        });  
      return await response.json()
    }
    return (
        <Form savePost={addPost} />
    )
  }
  else  {
    return(<div><h1>not authorized</h1> </div>)
  }
}

export async function getServerSideProps(context) {
 
  const session = await getSession(context);
  
  if (!session) {
    return {
      props: {
        user:{},
      },
    }
  } 
  else {
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
}