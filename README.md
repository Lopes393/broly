# Broly Feedback
<p>Broly é um sistema desenvolvido em PHP e ReactJS para envio de feedbacks dos colaboradores de uma empresa via email para o setor de Recursos Humanos. O feedback nas empresas é uma ferramenta construtiva de comunicação, avaliação e incentivo para melhorar comportamentos e o desempenho dos colaboradores.</p>

<br/>

## 🚀 Inicío

- Clone o projeto em sua máquina:

`git clone https://github.com/Lopes393/broly.git`

- Entre na pasta do projeto:

`cd broly`

## Backend

- Vamos configurar o ambiente backend e instalar as dependências do projeto com composer:

`cd backend`
`composer install`

- Acesse o controller do projeto para configurar as informações de email:

`cd src/Controller`

- Altere as informações dentro do arquivo <b>FeeedbackController.php</b>:

$para = "exemplo@gmail.com";
$assunto = "Novo Feedback Recebido";

$mail->isSMTP();
$mail->Host = 'exemplo.com.br';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = 'true';
$mail->Username = 'feedback@exemplo.com.br';
$mail->Password = 'exemplodeSenha';

- Com as configurações feitas, podemos iniciar o servidor PHP na porta 8000:

`php -S localhost:8000`

## Frontend

- Entre dentro do projeto frontend para iniciar as configurações:

`cd broly/frontend/broly`

- Vamos configurar o ambiente frontend e instalar as dependências do projeto com npm:

`npm install`

- Para dar start no projeto, rode:

`npm run dev`

- Ele irá ser compilado e estará disponível no endereço <b>localhost:3000</b>



*Developed with love and dedication* - **Murilo Lopes**