import { prisma } from "@/lib/db";



export const createQrCode = async (values : any, userId : string) => {
 if (!values) {
    return {
        error : "Field is required!"
    }
 }

 const createdQr = await prisma.qr.create({
    data: {
        ...values,
        customerId : userId
    },
  });

if (!createdQr) {
    return {
        error : "Cannot create an qrcode"
    }
}


return createdQr;

}
export const updateQrCode = async (values : any, userId : string) => {
 if (!values) {
    return {
        error : "Faled to update!"
    }
 }

//  const updatedQr = await prisma.qr.update({
//     where:{
        
//     }
//  })

if (!updatedQr) {
    return {
        error : "Cannot create an qrcode"
    }
}


return updatedQr;

}



export const removeQrCode = async (id : string) => {
    try {
        if (!id) {
            return {
                error : "Id is required!"
            }
        }

        await prisma.qr.delete({
            where: {id}
        })

        return "Removed qrcode successfully"
    } catch {
        return null;
    }
}