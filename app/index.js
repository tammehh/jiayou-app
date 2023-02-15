import { useEffect, useState } from "react";
import Realm from "realm";

export default function Home() {
    const [messages, setMessages] = useState([]);
    // const Realm = require("realm")

    useEffect(async () => {
        const REALM_APP_ID = "jiayou-wcgoa";
        const app = new Realm.app({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const allMessages = await user.functions.getAllMessages();
            setMessages(allMessages)
        } catch (error) {
            console.error(error);
        }

    }, []);
    return (
        <view>
            {messages &&
                messages.map((message) => {
                    return <p key={message._id}>{message.message}</p>;
                })
            }
        </view>
    )
}