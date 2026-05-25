import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addPartner = async (data :{
    name:string;
    email:string;
    mobileno:string;
    message:string;
  
  })=>{
    try {
      const docRef = await addDoc(collection(db,"partnerShip"),{
        ...data,
        createdAt:serverTimestamp(),
  
      });
  
      return{
        id:docRef.id,
        ...data,
      };
    } catch (error) {
      console.error("ERROR ADD REGISTER:", error);
      throw error;
    }
  };