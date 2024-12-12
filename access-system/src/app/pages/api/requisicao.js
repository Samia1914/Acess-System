
export async function POST( ) {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  const myInit = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: { name: "maria", email: "maria@gmail.com" },
  };

  return request(
    "http://new.webdanca.com:8088/webdanca/v1/registration/signup",
    myInit
  );
//   return myRequest;
}

export default function handlerRequest(req, res) {
  if (req.method === 'POST') {
    // Processar solicitação POST
    const data = req.body; // O corpo da sua solicitação
    // ...faça algo com os dados...
    res.status(200).json({ message: 'Dados recebidos', data });
  } else {
    // Manipular qualquer outro método HTTP
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} Não Permitido`);
  }
}