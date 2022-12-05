module.exports = function transportor(opts) {
    const { nodemailer, config, nodemailerSendgrid } = opts;
    const url = "http://192.168.1.22:3000/v1/verifyUser";
    const tempurl = "http://localhost:3000/v1/verifyUser";
    const { key } = config.get("SENDGRID_API_KEY");

    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: key,
        })
    );

    async function sendConfirmationEmail(name, email, confirmationCode) {
        await transport
            .sendMail({
                from: "noreplytempp@gmail.com",
                to: email,
                subject: "Please confirm your account",
                html: `
                <h1>Email Confirmation</h1>
                  <h2>Hello ${name}</h2>
                  <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                  <a href=${tempurl + confirmationCode}> Click here</a>
                  </div>
                `,
            })
            //
            .catch((err) => console.log(err));
    }

    return {
        sendConfirmationEmail,
    };
};
