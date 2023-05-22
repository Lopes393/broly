<?php

namespace src\Controller;

use PHPMailer\PHPMailer\PHPMailer;

class FeedbackController
{
    public function store(array $data)
    {
        $mail = new PHPMailer();

        $para = "ti@siap.com.br.com";
        $assunto = "Novo Feedback Recebido";
        $mensagem = $data['feedback'];

        // Configura o SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.siap.com.br';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'seu_email@example.com';
        $mail->Password = 'sua_senha';

        // Configura o remetente e o destinatário
        $mail->setFrom('seu_email@example.com', 'Seu Nome');
        $mail->addAddress($para);

        // Configura o assunto e o corpo do email
        $mail->Subject = $assunto;
        $mail->Body = $mensagem;

        if ($mail->send()) {
            return [
                'status' => 'success',
                'message' => "Feedback enviado com sucesso!"
            ];
        }

        return [
            'status' => 'error',
            'message' => "Houve um erro ao enviar o Feedback!"
        ];
    }
}
