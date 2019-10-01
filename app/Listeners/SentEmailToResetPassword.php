<?php

namespace App\Listeners;

use App\Events\ResetPassword;
use Illuminate\Support\Facades\Notification;
use App\Notifications\SendResetPasswordEmail;

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
