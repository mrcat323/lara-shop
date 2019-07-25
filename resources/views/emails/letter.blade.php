@component('mail::message')
# First, Hi {{ $user->name }} !

**Greetings from Lara-Shop!**. 

*We are glad for you for using our app!*

**To be able to use all features, please verify your account by clicking the button below**

@component('mail::button', ["url" => getenv('APP_URL') ."/api/verify/account/${token}", "color" => "success"])
Verify
@endcomponent

Thanks,<br>
**Lara-Shop**
@endcomponent
