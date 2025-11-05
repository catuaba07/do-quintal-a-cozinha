import { MediaType, PrismaClient, Category } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    product_name: "Malcasado",
    description: "Saboroso macasado caseiro",
    category: Category.PROCESSADO,
    image: "https://md.coolab.org/uploads/upload_017b9a928c4570b12765c879c1231262.jpeg",
  },
  {
    product_name: "Pé de Moleque",
    description: "Pé de Moleque com assado na folha de bananeira",
    category: Category.PROCESSADO,
    image: "https://md.coolab.org/uploads/upload_238a4f1269f0e4126d3774d68d84c992.jpeg",
  },
  {
    product_name: "Cocada mundinha",
    description: "Cocada mundinha com gosto de infancia",
    category: Category.PROCESSADO,
    image: "https://md.coolab.org/uploads/upload_289c1845efd5caf8b2be1492fc73ab0c.jpeg",
  },
  {
    product_name: "Bolo de Macaxeira",
    description: "Bolo de macaxeira da vó",
    category: Category.PROCESSADO,
    image: "https://md.coolab.org/uploads/upload_c5b15456eea74eac7fe8630455570585.jpeg",
  },
];

const profile = {
  name: "Edna Salgado",
  phone_number: "+557996847218",
};

const prisma = new PrismaClient();

async function main() {
  const createdProfile = await prisma.profile.create({
    data: {
      id: uuidv4(),
      name: profile.name,
      phone_number: profile.phone_number,

      Product: {
        create: products.map(product => ({
          id: uuidv4(),
          product_name: product.product_name,
          description: product.description,
          category: product.category,
          media: {
            create: {
              media: {
                create: {
                  id: uuidv4(),
                  media_type: MediaType.IMAGE,
                  url: product.image
                }
              }
            }
          },
        }))
      }
    }
  });

  console.log(`Seeded profile: ${createdProfile.name}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
