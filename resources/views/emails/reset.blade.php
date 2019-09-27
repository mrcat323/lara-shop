@component('mail::message')
# Hello there
You've sent request for resetting your password
Please follow the link before 30 mins. After 30 minutes you won't be able to reset your password by this link.

@component('mail::button', ['url' => $url])
Reset
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
