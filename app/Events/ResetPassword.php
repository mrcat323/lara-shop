<?php

namespace App\Events;

use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class ResetPassword
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var User
     */
    public $user;
    public $token;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, $token)
    {
        $this->user = $user;
        $this->token = $token;
    }
}
