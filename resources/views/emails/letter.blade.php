@component('mail::message')
# First, Hi {{ $user->name }} !

**Greetings from Lara-Shop!**. 

*We are glad for you for using our app!*

**To be able to use all features, please verify your account by clicking the button below**

**You've got 2 days to verify your account, otherwise verification link will expire**

@component('mail::button', ["url" => URL::temporarySignedRoute('verify.via.token', now()->addDays(2), ['token' => $token]), "color" => "success"])
Verify
@endcomponent

Thanks,<br>
**Lara-Shop**
@endcomponent
