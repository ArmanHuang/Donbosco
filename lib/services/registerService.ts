import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addRegister = async (data: {
  name: string;
  email: string;
  mobileno: string;
  subject: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "register"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return {
      id: docRef.id,
      ...data,
    };
  } catch (error) {
    console.error("ERROR ADD REGISTER:", error);
    throw error;
  }
};