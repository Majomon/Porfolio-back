const { Resend } = require("resend");
const { EmailTemplate } = require("../templateResendEmail");

const resend = new Resend("re_Xik8M7nE_4cP5xCVbyVoKHqGzMiLwVxfa");

const postResendEmailController = async ({ name, email, message }) => {
  const data = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    /* to: ["infotezashoes@gmail.com"], */
    to: ["mauri.monzon91@gmail.com"],
    subject: "Contacto desde el Portfolio",
    html: await EmailTemplate({ name, email, message }),
  });

  return data;
};

module.exports = postResendEmailController;
