// server.js
const { EmailTemplate } = require("./templateResendEmail");
const express = require("express");
const cors = require("cors");

const { Resend } = require("resend");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const resend = new Resend("re_Xik8M7nE_4cP5xCVbyVoKHqGzMiLwVxfa");

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      /* to: ["infotezashoes@gmail.com"], */
      to: ["mauri.monzon91@gmail.com"],
      subject: "Contacto desde Portfolio",
      html: await EmailTemplate({ name, email, message }),
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

