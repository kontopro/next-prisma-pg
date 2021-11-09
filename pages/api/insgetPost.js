import prisma from '../../lib/prisma'

export default async (req, res) => {
    // Αν ζητηθεί ως post, να γίνει insert
    if (req.method === "POST")  {
      try {
          const data = req.body;        
          const toAdd = await prisma.post.create({
              data: {
                  ...data,
                },
          })
          res.status(200).json(toAdd);
      } 
      catch (err) {
          console.log(err);
          res.status(403).json({ err: "Error occured while adding a new food." });
      }
    }
  // 2 σε 1, αν απλά ζητήσεις το url δώσε όλα τα ποστ
    else 
    if (req.method === 'GET') {
      try {
          const allPosts = await prisma.post.findMany({
            include: {
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
      catch (error) {
          return res.status(422).json(error);
      }         
    }  
    res.end();
}
