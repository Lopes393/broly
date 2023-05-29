<?php

namespace src\Controller;

use PHPMailer\PHPMailer\PHPMailer;

class FeedbackController
{
    public function store(array $data)
    {
        $mail = new PHPMailer();

        //Especifique para qual email será enviado o feedback
        $para = "";

        $assunto = "Novo Feedback Recebido";
        $mensagem = $data['feedback'];

        // Configura o SMTP
        $mail->isSMTP();
        $mail->Host = '';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = 'true';
        $mail->Username = '';
        $mail->Password = '';

        // Configura o remetente e o destinatário
        $mail->setFrom($mail->Username, '');
        $mail->addAddress($para, '');
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
