export const authenticationQueryOptions = [
  {
    id: 'authentication queries',
    options: [
      {
        label: 'How to signup?',
        value: 'about signup',
        trigger: 'signin query response',
      },
      {
        label: 'How to login?',
        value: 'about login',
        trigger: 'login query response',
      },
      {
        label: 'How safe is my password?',
        value: 'about password',
        trigger: 'password query response',
      },
    ],
  },
]

export const authenticationQueryResponse = [
  {
    id: 'signin query response',
    message:
      "Click the Login button on top right corner and click signup. you will get a form where you can fill it also don't forget to verify your phone number via otp. That's all you will be signed in!",
    trigger: 'any other query',
  },
  {
    id: 'login query response',
    message:
      'Click Login button on your right top corner. you will get a form where you can enter email id and password to login.',
    trigger: 'any other query',
  },
  {
    id: 'password query response',
    message:
      "Your password is secured with strong hashing algorithm where the only person who can see password is you. Not even a programmer of this website can't see your password",
    trigger: 'any other query',
  },
]
