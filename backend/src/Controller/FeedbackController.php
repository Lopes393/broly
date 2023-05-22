<?php

namespace src\Controller;

use PHPMailer\PHPMailer\PHPMailer;

class FeedbackController
{
    public function store(array $data)
    {
        $mail = new PHPMailer();

        $para = "mloopes11@gmail.com";
        $assunto = "Novo Feedback Recebido";
        $mensagem = $data['feedback'];

        // Configura o SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.siap.com.br';
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->Username = 'feedback@siap.com.br';
        $mail->Password = 'AAQ+DeKcTTt';

        // Configura o remetente e o destinatário
        $mail->setFrom('feedback@siap.com.br', 'Feedback Siap');
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
            'message' => "Houve um erro ao enviar o Feedback!" . $mail->ErrorInfo
        ];
    }
}
