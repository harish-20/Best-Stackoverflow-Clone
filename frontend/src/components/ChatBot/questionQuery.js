export const questionQueryOptions = [
  {
    id: 'question queries',
    options: [
      {
        label: 'How to ask question to public?',
        value: 'about raising question',
        trigger: 'question raise response',
      },
      {
        label: 'Who can see my question?',
        value: 'question viewers',
        trigger: 'question viewers response',
      },
    ],
  },
]

export const questionQueryResponse = [
  {
    id: 'question raise response',
    message:
      'To ask question inn our website first you need to login/signup our website. after login, you can ask questions.',
    trigger: 'any other query',
  },
  {
    id: 'question viewers response',
    message:
      'Your question will be published to our website and anybody who visit our website can see your question. But for answering the user need to signin.',
    trigger: 'any other query',
  },
]
