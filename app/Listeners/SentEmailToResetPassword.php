<?php

namespace App\Listeners;

use App\Events\ResetPassword;
use App\Notifications\SendResetPasswordEmail;
use Illuminate\Support\Facades\Notification;

class SentEmailToResetPassword
{

    /**
     * Handle the event.
     *
     * @param  ResetPassword  $event
     * @return void
     */
    public function handle(ResetPassword $event)
    {
        Notification::send($event->user, new SendResetPasswordEmail($event->token));
    }
}
