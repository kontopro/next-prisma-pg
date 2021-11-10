import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react"
import {getMe} from '../../components/getMe' 



// prisma.$use(async (params, next) => {  

//   if (params.model == 'Post' && params.action == 'create' ) {
//     params.args.data.authorId = 'ckvqwal2i0084g4iwe6fd1cfk'
//   }

//   return next(params)

// })

export default async (req, res) => {
  
    // Αν ζητηθεί ως post, να γίνει insert
    if (req.method === 'POST')  {
      try {
          
          const newPost = JSON.parse(req.body);        
          const toAdd = await prisma.post.create({ data: newPost });         
          res.status(200).json(toAdd);
      } 
      catch (err) {
          console.log(err);
          res.status(403).json({ err: "Σφάλμα στην εισαγωγή εγγραφής (νεό ποστ)" });
      }
    }
  // 2 σε 1, αν απλά ζητήσω το url δώσε μου όλα τα ποστ
    else 
    if (req.method === 'GET') {
      try {
        
          const allPosts = await prisma.post.findMany({
            select: {
              id: true,
              title: true,
              author: true,
            },
            orderBy: [
              {
                id: "desc",
              },
            ],
          });
          return res.status(200).json(allPosts);
      } 
      catch (err) {
          return res.status(422).json(err);
      }         
    }  
    res.end();
}
