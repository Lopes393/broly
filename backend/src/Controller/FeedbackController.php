<?php

namespace src\Controller;

use PHPMailer\PHPMailer\PHPMailer;

class FeedbackController
{
    public function store(array $data)
    {
        $mail = new PHPMailer();

        $para = "t.alencar@siap.com.br";
        $assunto = "Novo Feedback Recebido";
        $mensagem = $data['feedback'];

        // Configura o SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.siap.com.br';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = 'true';
        $mail->Username = 'feedback@siap.com.br';
        $mail->Password = 'AAQ+DeKcTTt';

        // Configura o remetente e o destinatário
        $mail->setFrom($mail->Username, 'Feedback Siap');
        $mail->addAddress($para, 'Murilo Lopes');
        $mail->Subject = $assunto;
        $mail->isHTML(true);
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
