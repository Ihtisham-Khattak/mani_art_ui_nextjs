import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/emailUtils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    try {
      // Call the sendEmail function to send the email
      await sendEmail(email, subject, message);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
