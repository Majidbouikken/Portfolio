import HiringMessageForm from "../types/HiringMessageForm";
import { db } from "./FirebaseConfiguration";

const submitMessage = async (data: HiringMessageForm) => {
    await db.collection("portfolio-messages").add({
        fullname: data.fullname,
        message: data.message,
    })
    .then((docRef) => {
        console.log("Message written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export default submitMessage;
