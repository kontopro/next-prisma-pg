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
          res.status(403).json({ err: "Σφάλμα στην εισαγωγή εγγραφής (νεό ποστ)" });
      }
    }
  // 2 σε 1, αν απλά ζητήσω το url δώσε μου όλα τα ποστ
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
      catch (err) {
          return res.status(422).json(err);
      }         
    }  
    res.end();
}
