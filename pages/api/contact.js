const nodemailer = require("nodemailer");

export default (req, res) => {

  const { name, to, from, email, text, phone, privacy } = req.body;

  const filterSubject = to =>  {
    let subject = "";
    switch (to) {
      case 'contato@3ricias.com.br':
          subject = `3RICIAS CONSULTORIA E ASSESSORIA`
        break;

      case 'contato@3riciascidadaniaitaliana.com.br':
          subject =  `3RICIAS CIDADANIA ITALIANA`
        break;

      case 'contato@3riciascidadaniaportuguesa.com.br': 
          subject = `3RICIAS CIDADANIA PORTUGUESA`
        break;

      default:
          subject = `3RICIAS CONSULTORIA E ASSESSORIA`
      break;
    }
    return subject
  }

  const mailOptions = {
    from,
    to,
    subject: `[NOVO LEAD] ${name} - ${filterSubject(to)}`,
    text: `
      [NOVO LEAD]

      ${name} - ${filterSubject(to)}

      Email: ${email}
      Telefone: ${phone}
      Política de Privacidade: ${privacy}

      Mensagem:
      ${text}
    `,
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a020139762def0",
      pass: "6f2f79c07d2fdf"
    }
  });


  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });
  res.send("success");
};